import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    files: [],
    isLoading: false,
}

export const filesReducer = createSlice({
    name: 'files',
    initialState,
    reducers: {
        fetchFiles(state, action) {
            return {
                ...state,
                isLoading: true,
            }
        },
        fetchFilesSuccess(state, action) {
            // console.log('Files Reducer data printing', action.payload)
            return {
                ...state,
                message: 'Files API Successfull',
                isLoading: false,
                files: action.payload,
            }
        },
        fetchFilesFailed(state, action) {
            return {
                ...state,
                isLoading: false,
            }
        },

        removeFiles(state, action) {
            return []
        },
        updateFiles(state, action) {
            return []
        },
    },
})

export const { fetchFiles, fetchFilesSuccess, fetchFilesFailed } =
    filesReducer.actions

export default filesReducer.reducer
