import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../shared/footer';

const root = () => {
    return (
        <div>
            <Outlet>

            </Outlet>
            <Footer></Footer>
        </div>
    );
};

export default root;