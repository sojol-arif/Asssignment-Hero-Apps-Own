import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../src/components/Header/Navbar.jsx';
import Footer from '../../src/components/Footer/Footer.jsx';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div className='mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Root;