import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../componets/Pages/Shared/Footer/Footer';
import Navbar from '../../componets/Pages/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div className="max-w-[1440px] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;