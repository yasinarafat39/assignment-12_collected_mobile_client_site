import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../componets/Pages/Shared/Footer/Footer';
import Navbar from '../componets/Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div className="max-w-[1440px] mx-auto">
            <Navbar></Navbar>

            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        <li><Link to="/dashboard">My Orders</Link></li>
                        <li><Link to="/dashboard/addproduct">Add Product</Link></li>
                        <li><Link>Sidebar Item 2</Link></li>
                    </ul>

                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;