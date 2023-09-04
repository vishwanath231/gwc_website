import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import './components/salesforce.css';
import SalesforceBanner from './components/SalesforceBanner';
import SaleforceMain from './components/SaleforceMain';
import Footer from '../../components/footer/Footer';


const _Salesforce = () => {
    return (
        <>
            <Navbar />
            <SalesforceBanner />
            <SaleforceMain />
            <Footer />
        </>
    )
}

export default _Salesforce;