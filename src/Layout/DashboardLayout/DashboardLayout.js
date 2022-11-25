import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div >
        <Navbar></Navbar>
        <div className="drawer drawer-mobile w-10/12 mx-auto">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet></Outlet>
            </div>
            <div className="drawer-side bg-white ">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-white text-base-content">
                    <li><Link to="/dashboard">My Appointments</Link></li>

                </ul>

            </div>
        </div>
    </div>
    );
};

export default DashboardLayout;