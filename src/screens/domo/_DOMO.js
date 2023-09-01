import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import './components/domo.css';
import DomoBanner from './components/DomoBanner';
import DomoMain from './components/DomoMain';

const _DOMO = () => {
    return (
        <>
            <Navbar />
            <DomoBanner />
            <DomoMain />
        </>
    )
}

export default _DOMO;