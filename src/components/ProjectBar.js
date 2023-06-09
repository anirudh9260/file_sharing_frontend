import React from 'react'

import { Stack, Button, Box, TextField, MenuItem } from '@mui/material'

import { useAppSelector, useAppDispatch } from '../hooks/redux-hooks'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { getProjects } from '../redux/actions/projects'
import { getFiles } from '../redux/actions/files'
import EditProjectDialog from './EditProjectDialog'
import AddProjectDialog from './AddProjectDialog'

export default function ProjectBar(props) {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getProjects())
    }, [])

    const state = useAppSelector(state => state.projectsReducer)

    let menu_items = []
    if (state && state.isLoading) {
        menu_items = <MenuItem value="loading">Loading</MenuItem>
    }
    if (state && state.projects) {
        menu_items = state.projects.map(item => {
            return (
                <MenuItem key={item.id} value={item.project_name}>
                    {item.project_name}
                </MenuItem>
            )
        })
    }

    const [project, setproject] = useState('')

    const handleSelectProject = event => {
        setproject(event.target.value)
        // console.log("Selected Project :", event.target.value);
        // console.log("Use state Project:", project);
        props.changeSelectedProject(event.target.value)
        dispatch(getFiles())
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
                        <TextField
                            fullWidth
                            select
                            label="Select project"
                            // key={project.id}
                            value={project}
                            onChange={handleSelectProject}
                            helperText="Please select your project"
                        >
                            {menu_items}
                        </TextField>
                    </Box>
                    {project && (
                        <EditProjectDialog
                            project_name={project}
                        ></EditProjectDialog>
                    )}
                </Stack>
                <Stack direction="row">
                    <AddProjectDialog></AddProjectDialog>
                    {/* <UploadFile project_name={project}></UploadFile> */}
                </Stack>
            </Stack>
        </div>
    )
}

ProjectBar.propTypes = {
    changeSelectedProject: PropTypes.func,
}
