import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    projects: [], 
    isLoading: false
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
            console.log("Reducer data printing", action.data)
            return {
                ...state,
                message: 'Projects API Successfull',
                isLoading: false,
                projects: action.payload
            }
        },
        fetchProjectsFailed(state, action) {
            return {
                ...state,
                isLoading: false,
            }
        },
        
        removeProjects(state, action){
            return []
        },
        updateProjects(state, action){
            return []
        }
            
        
    },
});

export const {
    fetchProjects,
    fetchProjectsSuccess,
    fetchProjectsFailed,
} = projectsReducer.actions

export default projectsReducer.reducer;
