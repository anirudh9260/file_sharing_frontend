import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    files: [],
    isLoading: false,
    isUploading: false,
    isCopying: false,
    isDeleting: false,
    isError: false,
    isConverting: "",
    message: ""
}

function createData(id, uid, file_name, date_modified, type, size, uploaded_by) {
    return {
        id,
        uid, 
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
            // console.log("Action payload", action.payload)
            for (let i = 0; i < action.payload.length; i++) {
                row_data.push(
                    createData(
                        action.payload[i].id,
                        action.payload[i].uid,
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
                // message : "",
                isUploading: true,
            }
        },
        uploadFilesSuccess(state, action) {
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
                message : "",
                isDeleting: true,
            }
        },
        removeFilesSuccess(state, action) {

            console.log("Action payload:", action)
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


        copyLink(state, action) {
            return {
                ...state,
                message : "",
                isCopying: true,
            }
        },
        copyLinkSuccess(state, action) {
            navigator.clipboard.writeText(action.payload)
            return {
                ...state,
                message: 'File Link Copied',
                isCopying: false,
                isError: false,
            }
        },
        copyLinkFailed(state, action) {
            return {
                ...state,
                message: 'File Link Copy Error',
                isCopying: false,
                isError: true,
            }
        },

        convertFile(state, action) {
            return {
                ...state,
                message : "",
                isConverting: true,
            }
        },
        convertFileSuccess(state, action) {
            navigator.clipboard.writeText(action.payload)
            return {
                ...state,
                message: 'File Successfully Converted',
                isConverting: false,
                isError: false,
            }
        },
        convertFileFailed(state, action) {
            return {
                ...state,
                message: 'File Conversion Error',
                isConverting: false,
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
    copyLink,
    copyLinkSuccess,
    copyLinkFailed,
    convertFile,
    convertFileSuccess,
    convertFileFailed
} = filesReducer.actions

export default filesReducer.reducer
