import React from 'react';
import './components/career.css';
import Navbar from '../../components/navbar/Navbar';
import CareerBanner from './components/CareerBanner';
import CareerMain from './components/CareerMain';
import Footer from '../../components/footer/Footer';


const _Career = () => {
    return (
        <>
            <Navbar />
            <CareerBanner />
            <CareerMain />
            <Footer />
        </>
    )
}

export default _Career;