import * as React from 'react'
import SignIn from './pages/Home/SignIn'
import SignUp from './pages/Home/SignUp'
import TopBar from './components/TopBar'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import UserSession from './services/auth'
import About from './pages/Home/About'
import Profile from './pages/Home/Profile'
import ProjectSettings from './pages/Settings/ProjectSettings'
import PageNotFound from './pages/Home/PageNotFound'

function App() {
    return (
        <BrowserRouter>
            <TopBar />
            <div style={{ marginTop: 10 }}>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Home />}
                        render={() => {
                            return UserSession.isAuthenticated() ? (
                                <Navigate to="/dash" />
                                ) : (
                                    <Navigate to="/signin" />
                                    )
                                }}
                    />

                    <Route path="/dash" element={ UserSession.isAuthenticated() ? (<Home />):(<SignIn />)}/>
                    {/* <Route path="/home" element={<Home />}></Route> */}
                    <Route path="/signin" element={<SignIn />}></Route>
                    <Route path="/settings" element={<ProjectSettings />}></Route>
                    <Route path="/signup" element={<SignUp />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/profile" element={<Profile />}></Route>
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
