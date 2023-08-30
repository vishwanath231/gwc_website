import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Banner from './components/Banner';
import GCP_Card from './components/GCP_Card';
import Footer from '../../components/footer/Footer';
import './components/gcp.css';

const _GCP = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <GCP_Card />
            <Footer />
        </>
    )
}

export default _GCP;