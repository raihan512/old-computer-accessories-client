import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../shared/Navbar/Navbar';
import Dashboard from '../Dashboard';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Dashboard></Dashboard>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardLayout;