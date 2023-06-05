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
import {CircularProgress} from '@mui/material'

import { getProjects } from '../redux/actions/projects'

export default function SelectProject(props) {
    const dispatch = useAppDispatch()
    const state = useAppSelector((state) => state.projectsReducer)
    console.log("State:", state)
    const [project, setproject] = useState('')

    const handleChange = event => {
        setproject(event.target.value)
    }
    
    useEffect(() => {
        dispatch(getProjects())
    }, [])

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
                        >   {state && (
                            <MenuItem value="A">Loading</MenuItem>
                        )}
                            <MenuItem value="A">Project A</MenuItem>
                            <MenuItem value="B">Project B</MenuItem>
                            <MenuItem value="C">Project C</MenuItem>
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
