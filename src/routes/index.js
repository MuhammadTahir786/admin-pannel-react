import React from 'react'
import { BrowserRouter } from 'react-router'
import AuthRoutes from './authRoutes'
import DashboardRoutes from './dashboardRoutes'
import Sidebar from '../components/sideBar/sidebar'

const Routers = () => {
    return (
        <BrowserRouter>
            <AuthRoutes />
            <DashboardRoutes />
        </BrowserRouter>
    )
}

export default Routers
