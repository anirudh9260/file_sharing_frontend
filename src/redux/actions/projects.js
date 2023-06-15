import apiClient from '../../services/apiClient'
import { PROJECTS_API } from '../../constants'
import {
    fetchProjectsSuccess,
    fetchProjectsFailed,
    fetchProjects,
    addProjects,
    addProjectsSuccess,
    addProjectsFailed,
    deleteProjects,
    deleteProjectsSuccess,
    deleteProjectsFailed,
    updateProjects,
    updateProjectsSuccess,
    updateProjectsFailed

} from '../reducer/projects'

// GET Projects Action => GET
export const getProjects = () => async dispatch => {
    await dispatch(fetchProjects())
    try {
        const response = await apiClient.get(PROJECTS_API)
        console.log('Printing from project actions:', response.data)
        return dispatch(fetchProjectsSuccess(response.data))
    } catch (err) {
        return dispatch(fetchProjectsFailed(err))
    }
}

// ADD PROJECTS Action => POST
export const addProjectAction = body => async dispatch => {
    console.log('Calling Action : addProjectAction()')
    await dispatch(addProjects())
    try {
        const response = await apiClient.post(PROJECTS_API, body)
        console.log('Printing from addProjectAction():', response.data)
        return dispatch(addProjectsSuccess(response.data))
    } catch (err) {
        return dispatch(addProjectsFailed(err))
    }
}

// EDIT Projects Action => PUT
export const editProjectsAction = (projectId, body) => async dispatch => {
    console.log('Calling Action : editProjectsAction()')
    await dispatch(updateProjects())
    try {
        const response = await apiClient.put(`${PROJECTS_API}/${projectId}`, body)
        console.log('Printing from editProjectsAction:', response.data)
        return dispatch(updateProjectsSuccess(response.data))
    } catch (err) {
        return dispatch(updateProjectsFailed(err))
    }
}



// DELETE PROJECTS Action => DELETE
export const deleteProjectAction = projectId => async dispatch => {
    console.log('Calling Action : deleteProjectAction()')
    await dispatch(deleteProjects())
    try {
        const response = await apiClient.delete(`${PROJECTS_API}/${projectId}`)
        console.log('Printing from deleteProjectAction():', response.data)
        return dispatch(deleteProjectsSuccess(response.data))
    } catch (err) {
        return dispatch(deleteProjectsFailed(err))
    }
}