import React from 'react'
import Navbar from './components/navbar/Navbar';
import Slider from './components/Slider';
import Service from './components/Service';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import Products from './components/Products';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const App = () => {
    return (
        <>
            <Navbar />
            <Slider />
            <div className="shape">
                <Service />
                <Products />
            </div>
            <Newsletter />
            <Footer />
        </>
    )
}

export default App;