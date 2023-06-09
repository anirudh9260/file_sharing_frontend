import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    files: [],
    isLoading: false,
}

function createData(id, file_name, date_modified, type, size, uploaded_by) {
    return {
        id,
        file_name,
        date_modified,
        type,
        size,
        uploaded_by,
    }
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
            let row_data = []
            for (let i = 0; i < action.payload.length; i++) {
                row_data.push(
                    createData(
                        action.payload[i].id,
                        action.payload[i].file_name,
                        action.payload[i].created_at.toString('MMMM yyyy'),
                        action.payload[i].extension,
                        action.payload[i].size,
                        action.payload[i].username,
                    ),
                )
            }

            return {
                ...state,
                message: 'Files API Successfull',
                isLoading: false,
                files: row_data,
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
