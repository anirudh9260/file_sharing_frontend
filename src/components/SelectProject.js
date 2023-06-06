import React from 'react'

import {
    Stack,
    Button,
    ButtonGroup,
    Box,
    TextField,
    MenuItem,
    Grid,
} from '@mui/material'
import { useAppSelector, useAppDispatch } from '../hooks/redux-hooks'
import { useState, useEffect } from 'react'
import { CircularProgress } from '@mui/material'

import { getProjects } from '../redux/actions/projects'

export default function SelectProject(props) {
    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.projectsReducer)
    console.log('State:', state)
    const [project, setproject] = useState('')

    const handleChange = event => {
        setproject(event.target.value)
    }

    useEffect(() => {
        dispatch(getProjects())
    }, [])

    let menu_items = []
    if (state && state.isLoading) {
        menu_items = <MenuItem value="A">Loading</MenuItem>
    }
    if (state && state.projects) {
        console.log(state.projects)
        // TODO: Update it as per projects list
        
        // menu_items = state.projects.map(item => {
        //     return <MenuItem key={item.value} value={item.value}>{item.name}</MenuItem>
        // })
    }

    return (
        <div>
            <Box width="400px">
                <Stack>
                    <Stack spacing={2} direction="row">
                        <TextField
                            label="Select your project"
                            select
                            value={project}
                            onChange={handleChange}
                            fullWidth
                        >
                            {menu_items}
                        </TextField>

                        <Box>
                            <Stack spacing={2} direction="row" useFlexGap>
                                <Button
                                    variant="contained"
                                    size="small"
                                    color="primary"
                                >
                                    Edit Project
                                </Button>
                                <Button
                                    onClick={() => {
                                        alert(' Add Project clicked!!!')
                                    }}
                                >
                                    Add Project
                                </Button>
                            </Stack>
                        </Box>
                    </Stack>
                </Stack>
            </Box>
        </div>
    )
}
