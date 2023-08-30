import React from 'react'
import Dot from '../../../assets/decor-1.png';
import AboutImg from '../../../assets/about-2.png';
import { FiCheckSquare } from 'react-icons/fi';

const About = () => {
    return (
        <div className=''>
            <div className="max-w-screen-xl mx-auto py-20 px-5">
                <div className="grid grid-cols-2 gap-4">
                    <div className="mt-9">
                        <div className="uppercase text-sm font-medium tracking-wide text-gray-500">about company</div>
                        <div className="mt-3 mb-6 text-3xl font-bold text-[#1D165B]">Our mission is provide profitable product to customers</div>
                        <img src={Dot} alt="decoration" />
                        <p className='mt-5'>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it who do not know how to pursue pleasure rationally encounter.</p>
                        <div className="flex items-center mt-10">
                            <ul className='mr-16'>
                                <li className='flex items-center'>  <FiCheckSquare className='text-[#3875F4]  mr-2' /> HCLS</li>
                                <li className='flex items-center my-4'>  <FiCheckSquare className='text-[#3875F4] mr-2' /> Retail</li>
                                <li className='flex items-center'> <FiCheckSquare className='text-[#3875F4] mr-2' /> Manufacturing</li>
                            </ul>
                            <ul>
                                <li className='flex items-center'>  <FiCheckSquare className='text-[#3875F4] mr-2' /> Media & Entertainment</li>
                                <li className='flex items-center my-4'>  <FiCheckSquare className='text-[#3875F4] mr-2' /> Supply Chain & Logistics</li>
                                <li className='flex items-center'>  <FiCheckSquare className='text-[#3875F4] mr-2' /> And Many More</li>
                            </ul>
                        </div>
                        <a href='#' className='inline-block mt-10 border-2 border-[#3875F4] bg-[#3875F4] text-sm font-[500] px-4 py-2 cursor-pointer hover:bg-transparent hover:text-[#3875F4] text-white rounded-full'>Read More</a>
                    </div>
                    <div className="about_image">
                        <img src={AboutImg} alt="about" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
