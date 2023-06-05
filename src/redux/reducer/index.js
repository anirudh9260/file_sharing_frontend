import authReducer from './auth'
import { projectsReducer } from './projects'

export const rootReducer = {
    authReducer: authReducer,
    projectsReducer: projectsReducer
}

