import React from 'react'
import AOS from 'aos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './screens/landing_page/_LandingPage';
import GCP from './screens/gcp/_GCP';
import DOMO from './screens/domo/_DOMO';
import Salesforce from './screens/salesforce/_Salesforce';
import Career from './screens/career/_Career';
import Contact from './screens/contact/_Contact';
import 'aos/dist/aos.css';
AOS.init();

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/gcp' element={<GCP />} />
                <Route path='/domo' element={<DOMO />} />
                <Route path='/salesforce' element={<Salesforce /> } />
                <Route path='/careers' element={<Career />  } />
                <Route path='/contact' element={<Contact />  } />
            </Routes>
        </BrowserRouter>
    )
}

export default App;