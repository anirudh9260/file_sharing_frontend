import apiClient, { uploadApiClient } from '../../services/apiClient'
import { FILES_API } from '../../constants'
import {
    fetchFiles,
    fetchFilesSuccess,
    fetchFilesFailed,
    uploadFiles,
    uploadFilesSuccess,
    uploadFilesFailed,
    removeFiles,
    removeFilesSuccess,
    removeFilesFailed,
    copyLink,
    copyLinkSuccess,
    copyLinkFailed
    
} from '../reducer/files'



export const getFilesForProject = projectId => async dispatch => {
    console.log('Calling Action : getFilesForProject()')
    await dispatch(fetchFiles())
    try {
        const response = await apiClient.get(`${FILES_API}/${projectId}`)
        console.log('Response from getFilesForProject():', response.data)
        return dispatch(fetchFilesSuccess(response.data))
    } catch (err) {
        return dispatch(fetchFilesFailed(err))
    }
}

export const uploadFilesAction = formData => async dispatch => {
    console.log('Calling Action : uploadFiles()')
    // console.log(formData)
    await dispatch(uploadFiles())
    try {
        const response = await uploadApiClient.post(FILES_API, formData)
        console.log('Printing from uploadFilesAction():', response.data)
        return dispatch(uploadFilesSuccess(response.data))
    } catch (err) {
        return dispatch(uploadFilesFailed(err))
    }
}

export const copyLinkAction = link => async dispatch => {
    console.log('copyLinkAction()')
    await dispatch(copyLink())
    try {
        return dispatch(copyLinkSuccess(link))
    } catch (err) {
        return dispatch(copyLinkFailed(err))
    }
}

export const deleteFilesAction = id => async dispatch => {
    console.log('Calling Action : deleteFilesAction()')
    await dispatch(removeFiles())
    try {
        const response = await apiClient.delete(`${FILES_API}/${id}`)
        console.log('Response from deleteFilesAction():', response.data)
        return dispatch(removeFilesSuccess(response.data))
    } catch (err) {
        return dispatch(removeFilesFailed(err))
    }
}

