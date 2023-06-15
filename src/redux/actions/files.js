import apiClient, { uploadApiClient } from '../../services/apiClient'
import { FILES_API, PROJECTS_API } from '../../constants'
import {
    fetchFiles,
    fetchFilesSuccess,
    fetchFilesFailed,
    uploadFiles,
    uploadFilesSuccess,
    uploadFilesFailed,
    removeFiles,
    updateFiles,
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


