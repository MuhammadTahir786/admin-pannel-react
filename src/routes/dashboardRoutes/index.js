import React from 'react'
import { Route, Routes } from 'react-router'
import Dashboard from '../../pages/dashboard/dashboard'
import Table from '../../pages/table/table'
import Billing from '../../pages/billing/billing'


const DashboardRoutes = () => {
    return (

        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tables" element={<Table/>} />
            <Route path="/billing" element={<Billing/>} />
            
        </Routes>

    )
}

export default DashboardRoutes
