import { createSlice } from '@reduxjs/toolkit'
import UserSession from '../../services/auth'

const initialState = {
    isLoading: false,
    message: '',
    access_token: null,
    users: [],
    isError: false,
}

export const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        postLogin(state, action) {
            return {
                ...state,
                message: '',
                isLoading: true,
            }
        },
        postLoginSuccess(state, action) {
            UserSession.setUser(action.payload)
            return {
                ...state,
                isLoading: false,
            }
        },
        postLoginFailed(state, action) {
            const errorMessage = action?.payload?.response?.data?.error
                ? action?.payload?.response?.data?.error
                : ''
            return {
                ...state,
                message: `User login failed: ${errorMessage}`,
                isLoading: false,
                isError: true,
            }
        },
        postRegister(state, action) {
            return {
                ...state,
                isLoading: true,
            }
        },
        postRegisterSuccess(state, action) {
            return {
                ...state,
                user: action.payload?.data,
                isLoading: false,
            }
        },
        postRegisterFailed(state, action) {
            const errorMessage = action?.payload?.response?.data?.error
                ? action?.payload?.response?.data?.error
                : ''
            console.log(action.payload?.response)
            return {
                ...state,
                message: `User registration failed: ${errorMessage}`,
                isLoading: false,
                isError: true,
            }
        },
        passwordReset(state, action) {
            return {
                ...state,
                isLoading: true,
                message: '',
            }
        },
        passwordResetSuccess(state, action) {
            return {
                ...state,
                user: action.payload.data,
                isLoading: false,
                message: 'Password Changed Successfully',
                isError: false,
            }
        },
        passwordResetFailed(state, action) {
            console.log(action.payload.response.data)
            return {
                ...state,
                isLoading: false,
                message: action.payload.response.data['error'],
                isError: true,
            }
        },

        fetchUsers(state, action) {
            return {
                ...state,
                isLoading: true,
                message: '',
            }
        },
        fetchUsersSuccess(state, action) {
            return {
                ...state,
                users: action.payload,
                isLoading: false,
                isError: false,
            }
        },
        fetchUsersFailed(state, action) {
            console.log(action.payload.response.data)
            return {
                ...state,
                isLoading: false,
                message: action.payload.response.data['error'],
                isError: true,
            }
        },

        logout(state, action) {
            return {
                ...state,
                isLogout: true,
            }
        },
        logoutSuccess(state, action) {
            UserSession.removeUser()
            return {
                ...state,
                isLogout: false,
                isError: false,
            }
        },
        logoutFailed(state, action) {
            return {
                ...state,
                isLogout: false,
                message: action.payload.response.data['error'],
                isError: true,
            }
        },
    },
})

export const {
    postLogin,
    postLoginSuccess,
    postLoginFailed,
    postRegister,
    postRegisterSuccess,
    postRegisterFailed,
    passwordReset,
    passwordResetSuccess,
    passwordResetFailed,
    fetchUsers,
    fetchUsersSuccess,
    fetchUsersFailed,
    logout,
    logoutSuccess,
    logoutFailed,
} = authReducer.actions

export default authReducer.reducer
