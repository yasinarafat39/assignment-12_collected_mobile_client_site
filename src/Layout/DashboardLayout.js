import React, { useContext } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Footer from '../componets/Pages/Shared/Footer/Footer';
import Navbar from '../componets/Pages/Shared/Navbar/Navbar';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useSeller from '../hooks/useSeller';
import useTitle from '../hooks/useTitle';

const DashboardLayout = () => {
    useTitle("Dashboard");
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)

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

                        <li><NavLink to="/dashboard">My Profile</NavLink></li>
                        <li><NavLink to="/dashboard/myorders">My Orders</NavLink></li>


                        {
                            isSeller && <>
                                <li><NavLink className={({ isActive }) => isActive ? "bg-gray-500" : "bg-gray-50"} to="/dashboard/addproduct">Add Product</NavLink></li>
                                <li><NavLink className={({ isActive }) => isActive ? "bg-gray-500" : "bg-gray-50"} to="/dashboard/myproducts">My Products</NavLink></li>
                            </>
                        }

                        {
                            isAdmin && <>
                                <li><NavLink className={({ isActive }) => isActive ? "bg-gray-500" : "bg-gray-50"} to="/dashboard/allseller">All Seller</NavLink></li>
                                <li><NavLink className={({ isActive }) => isActive ? "bg-gray-500" : "bg-gray-50"} to="/dashboard/makeadmin">Make Admin</NavLink></li>
                            </>
                        }

                    </ul>

                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;