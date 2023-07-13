import React from 'react'
import PropTypes from 'prop-types'
import { Stack, Box, Button, MenuItem, FormControl } from '@mui/material'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import { useAppSelector, useAppDispatch } from '../hooks/redux-hooks'
import { getFilesForProject } from '../redux/actions/files'
import { setProjectsAction } from '../redux/actions/projects'
import AddProjectDialog from './AddProjectDialog'
import { useNavigate } from 'react-router-dom'
import UserSession from '../services/auth'


export default function ProjectBar(props) {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const projectsState = useAppSelector(state => state.projectsReducer)
    
    const { selectedProject, setSelectedProject } = props

    let menu_items = []

    if (projectsState && projectsState.isLoading) {
        menu_items = <MenuItem value="loading">Loading</MenuItem>
    }


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
        // const projectName = event.target.value
        // const projectId = item.props.name
        // let newProjectValues = {
        //     projectName: projectName,
        //     projectId: projectId,
        // }
        let obj = projectsState.projects.find(o => o.projectId === item.props.name);
        // console.log("OBJ", obj)
        // console.log(UserSession.isAdmin())
        // console.log(UserSession.getUserName())
        dispatch(setProjectsAction({...obj}))
        setSelectedProject({...obj})
        dispatch(getFilesForProject(item.props.name))
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
                                value={
                                    !selectedProject.projectName
                                        ? ''
                                        : selectedProject.projectName
                                }
                                label="Select Project"
                                onChange={handleSelectProject}
                            >
                                {menu_items}
                            </Select>
                        </FormControl>
                    </Box>
               
                    {/* <Button variant="contained">Selected Project: {selectedProject.projectName}</Button>
                <Button variant="contained">Project Owner: {selectedProject.userName}</Button>
                <Button variant="contained">UserName: {UserSession.getUserName()} </Button>
                <Button variant="contained">Is Admin: {UserSession.isAdmin()+""}</Button> */}
                    {selectedProject.projectName && ((UserSession.isAdmin()) || (UserSession.getUserName() === selectedProject.userName)) && (
                        <Box>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{ my: 1 }}
                            onClick={() => navigate('/settings')}
                        >
                            Project Settings
                        </Button>
                        </Box>
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
