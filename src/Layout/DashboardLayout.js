import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../componets/Pages/Shared/Footer/Footer';
import Navbar from '../componets/Pages/Shared/Navbar/Navbar';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useTitle from '../hooks/useTitle';

const DashboardLayout = () => {
    useTitle("Dashboard");
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)


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
                        <li><Link to="/dashboard/myproducts">My Products</Link></li>



                        {
                            isAdmin && <>
                                <li><Link to="/dashboard/allseller">All Seller</Link></li>
                                <li><Link to="/dashboard/makeadmin">Make Admin</Link></li>
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