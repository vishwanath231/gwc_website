import React from 'react'
import AOS from 'aos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import _LandingPage from './screens/landing_page/_LandingPage';
import _GCP from './screens/gcp/_GCP';
import _DOMO from './screens/domo/_DOMO';
import 'aos/dist/aos.css';
AOS.init();

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<_LandingPage />} />
                <Route path='/gcp' element={<_GCP />} />
                <Route path='/domo' element={<_DOMO />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;