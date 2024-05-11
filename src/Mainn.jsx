import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './componant/Header';
import Footer from './componant/Footer';

const Mainn = () => {
    return (
        <div className=''>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mainn;