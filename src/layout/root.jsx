import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../shared/footer';
import Navbar from '../shared/navbar';

const root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet>

            </Outlet>
            <Footer></Footer>
        </div>
    );
};

export default root;