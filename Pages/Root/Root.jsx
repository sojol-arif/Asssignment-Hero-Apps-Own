import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../src/components/Header/Navbar.jsx';
import Footer from '../../src/components/Footer/Footer.jsx';

const Root = () => {
    return (
        <div className='mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;