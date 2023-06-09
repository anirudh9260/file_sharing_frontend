import apiClient from '../../services/apiClient'
import { FILES_API } from '../../constants'
import {
    fetchFilesSuccess,
    fetchFilesFailed,
    fetchFiles,
} from '../reducer/files'


export const getFiles = () => async dispatch => {
    await dispatch(fetchFiles())
    try {
        const response = await apiClient.get(FILES_API)
        // console.log("Printing from files actions:", response.data)
        return dispatch(fetchFilesSuccess(response.data))
    } catch (err) {
        return dispatch(fetchFilesFailed(err))
    }
}
