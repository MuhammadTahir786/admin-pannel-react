import React from 'react'
import { BrowserRouter } from 'react-router'
import AuthRoutes from './authRoutes'

const Routers = () => {
    return (
        <BrowserRouter>
            <AuthRoutes />
        </BrowserRouter>
    )
}

export default Routers
