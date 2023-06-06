import apiClient from '../../services/apiClient'
import { FILES_API } from '../../constants'
import {
    fetchFilesSuccess,
    fetchFilesFailed,
    fetchFiles,
} from '../reducer/files'

const initialState = {
    projects: [],
}

export const getProjects = () => async dispatch => {
    await dispatch(fetchFiles())
    try {
        const response = await apiClient.get(FILES_API)
        console.log("Printing from project actions:", response.data)
        return fetchFilesSuccess(response.data)
    } catch (err) {
        return dispatch(fetchFilesFailed(err))
    }
}
