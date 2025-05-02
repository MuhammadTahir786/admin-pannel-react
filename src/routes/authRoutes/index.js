import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from '../../pages/login/login'

const AuthRoutes = () => {
    return (

        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<div>Register</div>} />
            <Route path="/forgot-password" element={<div>Forgot Password</div>} />
            <Route path="/reset-password" element={<div>Reset Password</div>} />
            <Route path="/verify-email" element={<div>Verify Email</div>} />
        </Routes>

    )
}

export default AuthRoutes
