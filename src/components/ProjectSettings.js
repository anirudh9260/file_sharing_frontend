import React from 'react'
import PropTypes from 'prop-types'
import { Stack, Box, MenuItem, FormControl } from '@mui/material'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import Container from '@mui/material/Container'
import { useAppSelector, useAppDispatch } from '../hooks/redux-hooks'

import { setProjectsAction, getProjectUsersAction } from '../redux/actions/projects'
import AddProjectDialog from './AddProjectDialog'
import EditProjectDialog from './EditProjectDialog'
import DeleteProjectModal from './DeleteProjectDialog'
import SnackbarNotification from './SnackbarNotification'
import ProjectAccessTable from './ProjectAccessTable'
import UserSession from '../services/auth'
import { getProjects, getProjectAccessAction } from '../redux/actions/projects'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'





export default function ProjectSettings(props) {
    const dispatch = useAppDispatch()
    const projectsState = useAppSelector(state => state.projectsReducer)
    const selectedProject = projectsState.selectedProject
    const authState = useAppSelector(state => state.authReducer)
    const [snackbarState, setSnackbarState] = useState(false)

    useEffect(() => {
        if (UserSession.isAuthenticated()) {
            dispatch(getProjects())
        }
    }, [
        UserSession.isAuthenticated(),
        projectsState.isAdding,
        projectsState.isUpdating,
        projectsState.isDeleteting,
    ])

    useEffect(() => {
        setSnackbarState(true)
    }, [projectsState.message])

    

    let menu_items = []

    if (projectsState && !projectsState.isLoading) {
        menu_items = projectsState.projects.map(item => {
            return (
                <MenuItem
                    name={item.projectId}
                    key={item.projectId}
                    value={item.projectName}
                >
                    {item.projectName}
                </MenuItem>
            )
        })
    }
    const handleSelectProject = (event, item) => {
        let obj = projectsState.projects.find(
            o => o.projectId === item.props.name,
        )
        dispatch(setProjectsAction({ ...obj }))
        dispatch(getProjectAccessAction(obj.projectId))
    }

    return (
        <Container maxWidth="xl">
            <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ mt: 2, mb: 4 }}
            >
                <Stack direction="row" spacing={2} justifyContent="center">
                    <Box sx={{ minWidth: 200 }}>
                        <FormControl fullWidth>
                            <InputLabel>Select Project</InputLabel>
                            <Select
                                value={
                                    !projectsState.selectedProject.projectName
                                        ? ''
                                        : projectsState.selectedProject
                                              .projectName
                                }
                                label="Select Project"
                                onChange={handleSelectProject}
                            >
                                {menu_items}
                            </Select>
                        </FormControl>
                    </Box>

                    {selectedProject.projectName &&
                        // (UserSession.getUserName === selectedProject.userName ||
                        //     UserSession.isAdmin) && 
                            (
                            <EditProjectDialog
                                projectName={selectedProject.projectName}
                                projectId={selectedProject.projectId}
                                // setSelectedProject={setSelectedProject}
                            ></EditProjectDialog>
                        )}
                    {selectedProject.projectName &&
                        // (UserSession.getUserName === selectedProject.userName ||
                        //     UserSession.isAdmin) && 
                            (
                            <DeleteProjectModal
                                projectName={selectedProject.projectName}
                                projectId={selectedProject.projectId}
                            ></DeleteProjectModal>
                        )}
                </Stack>
                <Stack direction="row">
                    <AddProjectDialog></AddProjectDialog>
                </Stack>
            </Stack>
            {projectsState.isLoadingUsers === false && projectsState.selectedProject.projectName &&
                projectsState.projectAccessUsers && <ProjectAccessTable />}


            {snackbarState && (projectsState.message) && (
                                <SnackbarNotification
                                    message={projectsState.message}
                                    onClose={() => setSnackbarState(false)}
                                    severity={projectsState.isError ? 'error' : 'success'}
                                />
                            )}
        </Container>
    )
}

