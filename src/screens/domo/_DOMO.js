import React from 'react'
import './components/domo.css';
import Navbar from '../../components/navbar/Navbar';
import DomoBanner from './components/DomoBanner';
import DomoMain from './components/DomoMain';
import Footer from '../../components/footer/Footer';

const _DOMO = () => {
    return (
        <>
            <Navbar />
            <DomoBanner />
            <DomoMain />
            <Footer />
        </>
    )
}

export default _DOMO;