import React from 'react'
import { Stack, Box, MenuItem, FormControl } from '@mui/material'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import PropTypes from 'prop-types'
import { useAppSelector, useAppDispatch } from '../hooks/redux-hooks'
import { useEffect } from 'react'
import { getProjects } from '../redux/actions/projects'
import { getFilesForProject } from '../redux/actions/files'
import EditProjectDialog from './EditProjectDialog'
import AddProjectDialog from './AddProjectDialog'
import DeleteProjectModal from './DeleteProjectDialog'

export default function ProjectBar(props) {
    const { selectedProject, changeSelectedProject } = props
    const dispatch = useAppDispatch()
    const projectsState = useAppSelector(state => state.projectsReducer)
    
    // useEffect(() => {
    //     dispatch(getProjects()), changeSelectedProject
    // }, [projectsState.isDeleteting, projectsState.isAdding])

    let menu_items = []
    if (projectsState && projectsState.isLoading) {
        menu_items = <MenuItem value="loading">Loading</MenuItem>
    }
    if (projectsState && projectsState.projects) {
        menu_items = projectsState.projects.map(item => {
            return (
                <MenuItem
                    name={item.id}
                    key={item.id}
                    value={item.project_name}
                >
                    {item.project_name}
                </MenuItem>
            )
        })
    }

    const handleSelectProject = (event, item) => {
        const projectName = event.target.value
        const projectId = item.props.name
        let newProjectValues = {
            projectName: projectName,
            projectId: projectId,
        }
        changeSelectedProject(newProjectValues)
        dispatch(getFilesForProject(projectId))
    }

    return (
        <div>
            <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ mt: 2, mb: 4 }}
            >
                <Stack spacing={2} direction="row">
                    <Box sx={{ minWidth: 200 }}>
                        <FormControl fullWidth>
                            <InputLabel>Select Project</InputLabel>
                            <Select
                                value={selectedProject.projectName}
                                label="Select Project"
                                onChange={handleSelectProject}
                            >
                                {menu_items}
                            </Select>
                        </FormControl>
                    </Box>

                    {selectedProject.projectName && (
                        <EditProjectDialog
                            projectName={selectedProject.projectName}
                            projectId={selectedProject.projectId}
                            changeSelectedProject={changeSelectedProject}
                        ></EditProjectDialog>
                    )}
                    {selectedProject.projectName && (
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
        </div>
    )
}

ProjectBar.propTypes = {
    changeSelectedProject: PropTypes.func,
}
