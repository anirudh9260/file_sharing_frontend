import React from 'react'
import UserSession from '../services/auth'
import ProjectBar from './ProjectBar'
import Container from '@mui/material/Container'
import EnhancedTableContainer from '../pages/FilesTable/EnhancedTableContainer'
import SnackbarNotification from './SnackbarNotification'
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks'
import { useState, useEffect } from 'react'
import { getProjects } from '../redux/actions/projects'
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    
    const [snackbarState, setSnackbarState] = useState(false)

    const projectsState = useAppSelector(state => state.projectsReducer)
    const filesState = useAppSelector(state => state.filesReducer)
    
    useEffect(() => {
        if (!UserSession.isAuthenticated()) {
            navigate('/signin')
        }
    }, [])


    useEffect(() => {
        if (UserSession.isAuthenticated()){
            console.log("home", UserSession.isAuthenticated())
        dispatch(getProjects())}
    }, [projectsState.isAdding, projectsState.isUpdating, projectsState.isDeleteting]
        )
    

    useEffect(() => {
        setSnackbarState(true)
    }, [projectsState.message, filesState.isUploading, filesState.isDeleteting, filesState.isCopying, filesState.isConverting])
    

    return (
            <Container maxWidth="xl">
                <ProjectBar
                ></ProjectBar>
                <EnhancedTableContainer 
                ></EnhancedTableContainer>

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
