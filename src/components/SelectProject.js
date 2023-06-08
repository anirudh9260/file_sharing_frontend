import React from 'react'

import { Stack, Button, Box, TextField, MenuItem } from '@mui/material'

import EditProjectDialog from './EditProjectDialog'

import { useAppSelector, useAppDispatch } from '../hooks/redux-hooks'
import { useState, useEffect } from 'react'

import { getProjects } from '../redux/actions/projects'
import { getFiles } from '../redux/actions/files'
import AddProjectDialog from './AddProjectDialog'

export default function SelectProject(props) {
    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.projectsReducer)

    const [project, setproject] = useState('')

    const handleSelectProject = event => {
        setproject(event.target.value)
        dispatch(getFiles())
    }

    useEffect(() => {
        dispatch(getProjects())
    }, [])

    let menu_items = []
    if (state && state.isLoading) {
        menu_items = <MenuItem value="A">Loading</MenuItem>
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

    return (
        <div>
            {/* <Box width="1000px"> */}
            <Stack>
                <Stack spacing={2} direction="row">
                    <TextField
                        label="Select your project"
                        select
                        key={project.id}
                        value={project}
                        onChange={handleSelectProject}
                        fullWidth
                        helperText="Please select your project"
                    >
                        {menu_items}
                    </TextField>
                    {project && (
                        <EditProjectDialog
                            project_name={project}
                        ></EditProjectDialog>
                    )}
                    <AddProjectDialog></AddProjectDialog>

                    {/* <EditProjectModal project_name={project}></EditProjectModal> */}
                    {/* <AddProjectModal></AddProjectModal> */}
                    {/* <DeleteProjectModal></DeleteProjectModal> */}
                    {/* <Box>
                            <Stack spacing={2} direction="row" useFlexGap>
                                <Button
                                    variant="contained"
                                    size="small"
                                    color="primary"
                                    onClick={handleEditProject}
                                >
                                    Edit Project
                                </Button>

                                <Button onClick={handleAddProject}>
                                    Add Project
                                </Button>
                            </Stack>
                        </Box> */}
                </Stack>
            </Stack>
            {/* </Box> */}
        </div>
    )
}
