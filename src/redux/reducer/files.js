import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    files: [],
    isLoading: false,
    isUploading: false,
    isDeleting: false,
    isError: false,
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
                isError : false
            }
        },
        fetchFilesSuccess(state, action) {
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
                isLoading: false,
                files: row_data,
                isError : false
            }
        },
        fetchFilesFailed(state, action) {
            return {
                ...state,
                message: 'Files Fetch Failed',
                isError: true,
                isLoading: false,
            }
        },
        uploadFiles(state, action) {
            return {
                ...state,
                isUploading: true,
            }
        },
        uploadFilesSuccess(state, action) {
            console.log('Upload file success')
            console.log('Files Reducer Upload data', action.payload)
            return {
                ...state,
                message: 'File Upload Successfull',
                isUploading: false,
                isError: false,
            }
        },
        uploadFilesFailed(state, action) {
            return {
                ...state,
                message: 'File Upload Failed',
                isUploading: false,
                isError: true,
            }
        },
        removeFiles(state, action) {
            return {
                ...state,
                isDeleting: true,
            }
        },
        removeFilesSuccess(state, action) {
            return {
                ...state,
                message: 'File Delete Successfull',
                isDeleting: false,
                isError: false,
            }
        },
        removeFilesFailed(state, action) {
            return {
                ...state,
                message: 'File Delete Failed',
                isDeleting: false,
                isError: true,
            }
        },
    },
})

export const {
    fetchFiles,
    fetchFilesSuccess,
    fetchFilesFailed,
    uploadFiles,
    uploadFilesSuccess,
    uploadFilesFailed,
    removeFiles,
    removeFilesSuccess,
    removeFilesFailed,
    updateFiles,
} = filesReducer.actions

export default filesReducer.reducer
