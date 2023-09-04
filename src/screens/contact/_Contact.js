import React from 'react';
import './components/contact.css';
import Navbar from '../../components/navbar/Navbar';
import ContactBanner from './components/ContactBanner';
// import Footer from '../../components/footer/Footer';

const _Contact = () => {
    return (
        <>
            <Navbar />
            <ContactBanner />
            {/* <Footer /> */}
        </>
    )
}

export default _Contact;