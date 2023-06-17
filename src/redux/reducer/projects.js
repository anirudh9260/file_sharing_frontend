import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    projects: [],
    isLoading: false,
    isAdding: false,
    isDeleteting: false,
    isUpdating: false,
    message: '',
    isError: false,
    projectName : "",
    projectId : ""
}

export const projectsReducer = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        fetchProjects(state, action) {
            return {
                ...state,
                // message: '',
                isLoading: true,
            }
        },
        fetchProjectsSuccess(state, action) {
            return {
                ...state,
                isLoading: false,
                projects: action?.payload,
                isError: false
            }
        },
        fetchProjectsFailed(state, action) {
            return {
                ...state,
                message: 'Get Projects Failed',
                isLoading: false,
                isError: true,
            }
        },

        addProjects(state, action) {
            return {
                ...state,
                message: "",
                isAdding: true,
            }
        },
        addProjectsSuccess(state, action) {
            console.log("Action", action)
            return {
                ...state,
                message: 'Add Project Successfull',
                isAdding: false,
                isError: false,
            }
        },
        addProjectsFailed(state, action) {
            return {
                ...state,
                message: 'Add Project Failed',
                isAdding: false,
                isError: true,
            }
        },

        deleteProjects(state, action) {
            return {
                ...state,
                message: "",
                isDeleteting: true,
            }
        },
        deleteProjectsSuccess(state, action) {
            return {
                ...state,
                message: 'Project Successfully Deleted',
                isDeleteting: false,
                isError: false
            }
        },
        deleteProjectsFailed(state, action) {
            return {
                ...state,
                isDeleteting: false,
                isError: true,
                message: `Delete Project Failed : ${action?.payload?.msg ? action?.payload?.msg : ''}`,
            }
        },

        updateProjects(state, action) {
            return {
                ...state,
                message: "",
                isUpdating: true,
            }
        },
        updateProjectsSuccess(state, action) {
            return {
                ...state,
                message: 'Project Name Updated',
                isUpdating: false,
                isError: false,
            }
        },
        updateProjectsFailed(state, action) {
            return {
                ...state,
                isUpdating: false,
                message: 'Project Name Update Failed',
                isError: true,
            }
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
    updateProjectsFailed,
} = projectsReducer.actions

export default projectsReducer.reducer
