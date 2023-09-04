import React from 'react';
import './footer.css'
import { BiChevronRight } from 'react-icons/bi';
import { AiFillLinkedin, AiTwotoneHome } from 'react-icons/ai';
import { GrMail } from 'react-icons/gr';
import { BsFillTelephoneFill } from 'react-icons/bs';
import LOGO from '../../assets/logo.png';

const Footer = () => {
    return (
        <div className='footer_container'>
            <footer className='bg-[#F6F8FF] pt-12 pb-6'>
                <div className="max-w-screen-xl mx-auto">
                    <div className="grid grid-cols-4 gap-10 pb-12">
                        <div className="">
                            <div className="mb-7">
                                <img src={LOGO} alt="" className='w-32' />
                            </div>
                            <div className="text-[14.5px]">We ensure better services and better quality at every product you might be interested in and we shall help grow better.</div>
                        </div>
                        <div className="">
                            <div className="font-medium text-lg mb-4">Services</div>
                            <ul className='text-[14.5px]'>
                                <li className='mb-5'>
                                    <a href="" className='flex items-center hover:text-[#3A75F5] hover:ease-in-out hover:delay-150 hover:transition hover:translate-x-2'> <BiChevronRight /> BI Capability</a>
                                </li>
                                <li className='mb-5'>
                                    <a href="" className='flex items-center hover:text-[#3A75F5] hover:ease-in-out hover:delay-150 hover:transition hover:translate-x-2 '> <BiChevronRight /> Cloud & Infra</a>
                                </li>
                                <li className='mb-5'>
                                    <a href="" className='flex items-center hover:text-[#3A75F5] hover:ease-in-out hover:delay-150 hover:transition hover:translate-x-2'> <BiChevronRight /> Data Analytics</a>
                                </li>
                                <li>
                                    <a href="" className='flex items-center hover:text-[#3A75F5] hover:ease-in-out hover:delay-150 hover:transition hover:translate-x-2'> <BiChevronRight /> Digital Strategy & Design</a>
                                </li>
                            </ul>
                        </div>
                        <div className="">
                            <div className="font-medium text-lg mb-4">Contact Us</div>
                            <ul className='text-[14.5px]'>
                                <li className='flex items-center mb-3'>
                                    <div className="mr-3">
                                        <AiTwotoneHome className='text-xl' />
                                    </div>
                                    <div className="">
                                        #46/4 Novel Tech Park, Kudlu Gate, Hosur Rd, HSR Extension, Bangalore, Karnataka, India 560068
                                    </div>
                                </li>
                                <li className='flex items-center mb-3'>
                                    <div className="mr-3">
                                        <GrMail className='text-xl' />
                                    </div>
                                    <div className="">
                                        <a href="" className='hover:text-[#3A75F5] hover:underline'>indiahr@gwcteq.com</a></div>
                                </li>
                                <li className='flex items-center'>
                                    <div className="mr-3">
                                        <BsFillTelephoneFill className='text-xl' />
                                    </div>
                                    <div className="">
                                        <ul>
                                            <li className='mb-2'>
                                                <a href='#' className='hover:text-[#3A75F5] hover:underline'>+91 95914 33122</a>
                                            </li>
                                            <li>
                                                <a href='#' className='hover:text-[#3A75F5] hover:underline'>+91 80411 71958</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="">
                            <div className="font-medium text-lg mb-4">Social Media</div>
                            <ul className='text-[14.5px]'>
                                <li>
                                    <a href="https://www.linkedin.com/company/gwcteq/mycompany/" target='_blank' className='flex items-center'> <AiFillLinkedin className='text-2xl text-blue-600' /> &nbsp; Linkedin</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-200"></div>
                    <div className="mt-7 text-[14.5px]">
                        Copyright 2023 | Global WeConnect | All Rights Reserved.
                    </div>

                </div>
            </footer>
        </div>
    )
}

export default Footer