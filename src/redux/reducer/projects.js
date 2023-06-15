import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    projects: [],
    isLoading: false,
    isAdding: false,
    isDeleteting: false,
    isUpdating: false,
}

export const projectsReducer = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        fetchProjects(state, action) {
            return {
                ...state,
                isLoading: true,
            }
        },
        fetchProjectsSuccess(state, action) {
            // console.log('Projects Reducer data printing', action.payload)
            return {
                ...state,
                message: 'Projects API Successfull',
                isLoading: false,
                projects: action.payload,
            }
        },
        fetchProjectsFailed(state, action) {
            return {
                ...state,
                isLoading: false,
            }
        },

        addProjects(state, action) {
            return {
                ...state,
                isAdding: true,
            }
        },
        addProjectsSuccess(state, action) {
            return {
                ...state,
                message: 'Add Projects API Successfull',
                isAdding: false,
                // projects: action.payload
            }
        },
        addProjectsFailed(state, action) {
            return {
                ...state,
                isAdding: false,
            }
        },

        deleteProjects(state, action) {
            return {
                ...state,
                isDeleteting: true,
            }
        },
        deleteProjectsSuccess(state, action) {
            return {
                ...state,
                message: 'Delete Projects API Successfull',
                isDeleteting: false,
            }
        },
        deleteProjectsFailed(state, action) {
            return {
                ...state,
                isDeleteting: false,
            }
        },

        updateProjects(state, action) {
            return []
        },
        updateProjectsSuccess(state, action) {
            return []
        },
        updateProjectsFailed(state, action) {
            return []
        },
    },
})

export const {
    fetchProjects,
    fetchProjectsSuccess,
    fetchProjectsFailed,
    addProjects,
    addProjectsSuccess,
    addProjectsFailed,
    deleteProjects,
    deleteProjectsSuccess, 
    deleteProjectsFailed,
    updateProjects,
    updateProjectsSuccess,
    updateProjectsFailed
    
} = projectsReducer.actions

export default projectsReducer.reducer
