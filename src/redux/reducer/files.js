import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    Files: [], 
    isLoading: false
}

export const FilesReducer = createSlice({
    name: 'Files',
    initialState:[],
    reducers: {
        fetchFiles(state, action) {
            return {
                ...state,
                isLoading: true,
            }
        },
        fetchFilesSuccess(state, action) {
            console.log("Reducer data printing", action.data)
            return {
                ...state,
                message: 'Files API Successfull',
                isLoading: false,
                Files: action
            }
        },
        fetchFilesFailed(state, action) {
            return {
                ...state,
                isLoading: false,
            }
        },

        removeFiles(state, action){
            return []
        },
        updateFiles(state, action){
            return []
        }
            
        
    },
});

export const {
    fetchFiles,
    fetchFilesSuccess,
    fetchFilesFailed,
} = FilesReducer.actions

export default FilesReducer.reducer;
