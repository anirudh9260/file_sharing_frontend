import axios from 'axios'
import UserSession from './auth'

const token = UserSession.getToken()

const apiClient = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
    headers: {
        Authorization: token ? `Bearer ${token}` : '',
        "Content-Type" : 'application/json'
    }
})

// apiClient.interceptors.response.use(
//     function (response) {
//         return response
//     },
//     function (error) {
//         let res = error.response
//         if (res.status == 401) {
//             console.log('Something went wrong')
//         }
//         return Promise.reject(error)
//     },
// )

export const uploadApiClient = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
    headers: {
        Authorization: token ? `Bearer ${token}` : '',
        'Content-Type' : 'multipart/form-data'
    }
})

export default apiClient
