import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import LandingBanner from './components/LandingBanner';
import Services from './components/Services';
import Products from './components/Products';
import About from './components/About';
import Counter from './components/Counter';
import Features from './components/Features';
import Newsletter from '../../components/Newsletter';
import Footer from '../../components/footer/Footer';
import './components/landing.css';

const _LandingPage = () => {
    return (
        <>
            <Navbar />
            <LandingBanner />
            <div className="shape">
                <Products />
                <Services />
            </div>
            <About />
            <Counter />
            <Features />
            <Newsletter />
            <Footer />
        </>
    )
}

export default _LandingPage;