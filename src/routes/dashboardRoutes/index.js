import React from 'react'
import { Route, Routes } from 'react-router'
import Dashboard from '../../pages/dashboard/dashboard'


const DashboardRoutes = () => {
    return (

        <Routes>
            <Route path="/" element={<Dashboard />} />
        </Routes>

    )
}

export default DashboardRoutes
