import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import Banner from '../components/homepageCompo/Banner';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* changeable */}
            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;