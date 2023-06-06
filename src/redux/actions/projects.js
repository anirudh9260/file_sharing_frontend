import apiClient from '../../services/apiClient'
import { PROJECTS_API } from '../../constants'
import {
    fetchProjectsSuccess,
    fetchProjectsFailed,
    fetchProjects,
} from '../reducer/projects'

const initialState = {
    projects: [],
}

export const getProjects = () => async dispatch => {
    await dispatch(fetchProjects())
    try {
        const response = await apiClient.get(PROJECTS_API)
        console.log("Printing from project actions:", response.data)
        return dispatch(fetchProjectsSuccess(response.data))
    } catch (err) {
        return dispatch(fetchProjectsFailed(err))
    }
}
