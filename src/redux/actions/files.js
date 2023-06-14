import apiClient from '../../services/apiClient'
import { FILES_API } from '../../constants'
import {
    fetchFilesSuccess,
    fetchFilesFailed,
    fetchFiles,
} from '../reducer/files'


export const getFiles = (project_id) => async dispatch => {
    console.log("Project_ID:", project_id)
    await dispatch(fetchFiles())
    try {
        const response = await apiClient.get(FILES_API)
        // console.log("Printing from files actions:", response.data)
        return dispatch(fetchFilesSuccess(response.data))
    } catch (err) {
        return dispatch(fetchFilesFailed(err))
    }
}


export const getFilesForProject = (project_id) => async dispatch => {
    
    console.log("Project_ID:", project_id)
    // await dispatch(fetchFiles())
    try {
        const response = await apiClient.get(FILES_API, "/", project_id)
        // console.log("Printing from files actions:", response.data)
        return dispatch(fetchFilesSuccess(response.data))
    } catch (err) {
        return dispatch(fetchFilesFailed(err))
    }
}
