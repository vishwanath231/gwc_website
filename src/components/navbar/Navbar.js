import React, { useEffect, useState } from 'react';
import './navbar.css';
import LOGO_DARK from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);

    const handelScroll = () => {

        const offset = window.scrollY;
        if (offset > 20) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }

    useEffect(() => {

        window.addEventListener('scroll', handelScroll);
    }, [])




    return (
        <nav className={scrolled ? 'navbar_container_light shadow' : 'navbar_container shadow'} >
            <div className="max-w-screen-xl mx-auto my-0 ">
               <div className="flex justify-between items-center">
                    <div className="py-4">
                        <img src={LOGO_DARK} alt="" className='w-32' />
                    </div>
                    <div className="uppercase mt-6">
                        <ul className='flex items-center'>
                            <Link to='/' className='flex items-center text-sm font-[600] mr-1 cursor-pointer py-5 px-5 hover:text-[#3875F4] border-b-4 hover:border-b-4 border-white hover:border-[#3875F4]  text-black'>Home</Link>
                            <li className='flex text-sm font-[600] items-center mr-1 cursor-pointer about_nav py-5 px-5 hover:text-[#3875F4] border-b-4 hover:border-b-4  border-white hover:border-[#3875F4] text-black'>About
                                <div className="about_dropdown text-black">
                                    <ul>
                                        <li className='flex items-center p-3 hover:bg-[#3A74F5] hover:text-white'>Applications Capabilities</li>
                                        <li className='p-3 hover:bg-[#3A74F5] hover:text-white'>Industries</li>
                                        <li className='p-3 hover:bg-[#3A74F5] hover:text-white'>Partner</li>
                                        <li className='p-3 hover:bg-[#3A74F5] hover:text-white'>Our Team</li>
                                        <li className='p-3 hover:bg-[#3A74F5] hover:text-white'>Life at GWC</li>
                                    </ul>
                                </div>
                            </li>
                            <Link to='/gcp' className='flex items-center text-sm font-[600] mr-1 cursor-pointer py-5 px-5 hover:text-[#3875F4] border-b-4 hover:border-b-4 border-white hover:border-[#3875F4]  text-black'>GCP</Link>
                            <Link to='/domo' className='flex items-center text-sm font-[600] mr-1 cursor-pointer py-5 px-5 hover:text-[#3875F4] border-b-4 hover:border-b-4 border-white hover:border-[#3875F4]  text-black '>Domo</Link>
                            <Link to='/salesforce' className='flex items-center text-sm font-[600] mr-1 cursor-pointer py-5 px-5 hover:text-[#3875F4] border-b-4 hover:border-b-4 border-white hover:border-[#3875F4]  text-black '>Salesforce</Link>
                            <li className='flex items-center text-sm font-[600] mr-1 cursor-pointer py-5 px-5 hover:text-[#3875F4] border-b-4 hover:border-b-4 border-white hover:border-[#3875F4]  text-black '>Resources</li>
                            <li className='flex items-center'>
                                <button className='border-2 border-[#3875F4] bg-[#3875F4] text-md font-[500] p-1.5 cursor-pointer hover:bg-transparent text-white'>Let's talk</button>
                            </li>
                        </ul>
                    </div>
               </div>
            </div>
        </nav>
    )
}

export default Navbar;