import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../../Contexts/AuthProvider/AuthProvider';
import logo from '../../../../assets/logo/logo.png'



const Navbar = () => {
    const { user, userLogOut } = useContext(AuthContext);

    const menu = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/blogs">Blogs</NavLink></li>
        {
            user?.uid &&
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        }
    </>

    // User LogOut
    const handleUserLogOut = () => {
        userLogOut()
            .then(() => {
                toast.success('LogOut Success')
            })
            .catch(error => {
                console.error(error.message)
            })
    }

    return (
        <div>
            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                            <div className="navbar-end lg:hidden md:hidden">
                                {
                                    user?.uid ?
                                        <>
                                            <img title={user.displayName} src={user.photoURL} className="w-[60px] h-[60px] rounded-full mr-3 mb-3 mt-3" alt="user Profile" />
                                            <button onClick={handleUserLogOut} className="btn">Sign Out</button>
                                        </>
                                        :
                                        <>
                                            <Link to="/signin" className="btn mr-2 my-3">Sign In</Link>
                                            <Link to="/signup" className="btn">Sign Up</Link>
                                        </>
                                }
                            </div>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">
                        <img src={logo} alt="logo" className='w-[60px]' />
                        Collected Mobile
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menu}
                    </ul>
                </div>

                <div className="navbar-end ">
                    <div className='hidden lg:block md:block'>
                        {
                            user?.uid ?
                                <div className='flex items-center justify-end'>
                                    <img title={user.displayName} src={user.photoURL} className="w-[60px] h-[60px] rounded-full mr-3" alt="user Profile" />
                                    <button onClick={handleUserLogOut} className="btn">Sign Out</button>
                                </div>
                                :
                                <div className='flex items-center justify-end'>
                                    <Link to="/signin" className="btn mr-2">Sign In</Link>
                                    <Link to="/signup" className="btn">Sign Up</Link>
                                </div>
                        }
                    </div>

                    <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;