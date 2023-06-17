import React from 'react'
// import MuiTypography from './MUItutorials/MuiTypography'
// import MuiButton from './MUItutorials/MuiButton'
// import MuiTextField from './MUItutorials/MuiTextField'
// import MuiSelect from './MUItutorials/MuiSelect'
import ProjectBar from './ProjectBar'
import Container from '@mui/material/Container'
import EnhancedTableContainer from './EnhancedTableContainer'
import FileBar from './FileBar'
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks'
import { useState, useEffect } from 'react'
import SnackbarNotification from './SnackbarNotification'
import { getProjects } from '../redux/actions/projects'


const Home = () => {
    const dispatch = useAppDispatch()

    let initialProjectsValue = {
        projectId: '',
        projectName: '',
    }
    const [selectedProject, setSelectedProject] = useState(initialProjectsValue)
    const [snackbarState, setSnackbarState] = useState(false)

    const projectsState = useAppSelector(state => state.projectsReducer)
    const filesState = useAppSelector(state => state.filesReducer)

    useEffect(() => {
        setSnackbarState(true)
    }, [projectsState.message])

    useEffect(() => {
        dispatch(getProjects()), setSelectedProject(initialProjectsValue)
    }, [projectsState.isDeleteting])

    useEffect(() => {
        dispatch(getProjects())
    }, [projectsState.isAdding])

    useEffect(() => {
        dispatch(getProjects())
    }, [projectsState.isUpdating])
    

    return (
        <>
            <Container maxWidth="xl">
                {/* <MuiTypography></MuiTypography>
                <MuiButton></MuiButton>
                <MuiTextField></MuiTextField>
                <MuiSelect></MuiSelect> */}

                <ProjectBar
                    selectedProject={selectedProject}
                    changeSelectedProject={setSelectedProject}
                ></ProjectBar>
                <FileBar Project={selectedProject}></FileBar>
                {/* <EnhancedTable></EnhancedTable> */}
                <EnhancedTableContainer></EnhancedTableContainer>

                {snackbarState && (projectsState.message) && (
                    <SnackbarNotification
                        message={projectsState.message }
                        onClose={() => setSnackbarState(false)}
                        severity={projectsState.isError ? 'error' : 'success'}
                    />
                )}
                {snackbarState && (filesState.message) && (
                    <SnackbarNotification
                        message={filesState.message }
                        onClose={() => setSnackbarState(false)}
                        severity={filesState.isError ? 'error' : 'success'}
                    />
                )}
            </Container>
        </>
    )
}

export default Home
