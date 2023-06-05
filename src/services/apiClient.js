import axios from 'axios'
import UserSession from './auth'

const token = UserSession.getToken()
console.log(token)
const apiClient = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
    headers: {
        Authorization: token ? `Bearer ${token}` : ''
    }
})

apiClient.interceptors.response.use(
    function (response) {
        return response
    },
    function (error) {
        let res = error.response
        if (res.status == 401) {
            console.log('Something went wrong')
        }
        return Promise.reject(error)
    },
)

export default apiClient
