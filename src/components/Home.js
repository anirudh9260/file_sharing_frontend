import React from 'react'
import ProjectBar from './ProjectBar'
import Container from '@mui/material/Container'
import EnhancedTableContainer from './EnhancedTableContainer'
import FileBar from './FileBar'
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks'
import { useState, useEffect } from 'react'
import SnackbarNotification from './SnackbarNotification'
import { getProjects } from '../redux/actions/projects'
import { useNavigate } from 'react-router-dom'
import UserSession from '../services/auth'


const Home = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    let initialProjectsValue = {}

    const [selectedProject, setSelectedProject] = useState({initialProjectsValue})
    const [snackbarState, setSnackbarState] = useState(false)

    const projectsState = useAppSelector(state => state.projectsReducer)
    const filesState = useAppSelector(state => state.filesReducer)
    
    React.useEffect(() => {
        if (!UserSession.isAuthenticated()) {
            navigate('/signin')
        }
    }, [UserSession.isAuthenticated()])


    useEffect(() => {
        if (UserSession.isAuthenticated()){
        dispatch(getProjects());}
    }, [UserSession.isAuthenticated(), projectsState.isAdding, projectsState.isUpdating, projectsState.isDeleteting])
    
    useEffect(() => {
        setSelectedProject(initialProjectsValue);
    }, [projectsState.isDeleteting])    
    
    useEffect(() => {
        setSnackbarState(true)
    }, [projectsState.message, filesState.isUploading, filesState.isDeleteting, filesState.isCopying, filesState.isConverting])
    
    return (
            <Container maxWidth="xl">
                <ProjectBar
                    selectedProject={selectedProject}
                    setSelectedProject={setSelectedProject}
                ></ProjectBar>
                <FileBar Project={selectedProject}></FileBar>   
                <EnhancedTableContainer selectedProject={selectedProject}></EnhancedTableContainer>

                {snackbarState && (projectsState.message) && (
                    <SnackbarNotification
                        message={projectsState.message}
                        onClose={() => setSnackbarState(false)}
                        severity={projectsState.isError ? 'error' : 'success'}
                    />
                )}
                {snackbarState && (filesState.message) && (
                    <SnackbarNotification
                        message={filesState.message}
                        onClose={() => setSnackbarState(false)}
                        severity={filesState.isError ? 'error' : 'success'}
                    />
                )}
            </Container>
    )
}

export default Home
