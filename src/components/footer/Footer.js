import React from 'react';
import './footer.css';
import { BiChevronRight } from 'react-icons/bi';
import { AiFillLinkedin, AiTwotoneHome } from 'react-icons/ai';
import { GrMail } from 'react-icons/gr';
import { BsFillTelephoneFill } from 'react-icons/bs';
import LOGO from '../../assets/logo.png';

const Footer = () => {
    return (
        <div className='footer_container'>
            <footer className='bg-[#fafafa] pt-12'>
                <div className="max-w-screen-xl mx-auto my-10">
                    <div className="grid grid-cols-4 gap-10">
                        <div className="">
                            <div className="mb-7">
                                <img src={LOGO} alt="" className='w-40' />
                            </div>
                            <div className="">We ensure better services and better quality at every product you might be interested in and we shall help grow better.</div>
                        </div>
                        <div className="">
                            <div className="font-medium text-lg mb-4">Services</div>
                            <ul>
                                <li className='mb-5'>
                                    <a href="" className='flex items-center hover:text-[#3A75F5] hover:underline'> <BiChevronRight /> BI Capability</a>
                                </li>
                                <li className='mb-5'>
                                    <a href="" className='flex items-center hover:text-[#3A75F5] hover:underline'> <BiChevronRight /> Cloud & Infra</a>
                                </li>
                                <li className='mb-5'>
                                    <a href="" className='flex items-center hover:text-[#3A75F5] hover:underline'> <BiChevronRight /> Data Analytics</a>
                                </li>
                                <li>
                                    <a href="" className='flex items-center hover:text-[#3A75F5] hover:underline'> <BiChevronRight /> Digital Strategy & Design</a>
                                </li>
                            </ul>
                        </div>
                        <div className="">
                            <div className="font-medium text-lg mb-4">Contact Us</div>
                            <ul>
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
                            <ul>
                                <li>
                                    <a href="https://www.linkedin.com/company/gwcteq/mycompany/" target='_blank'> <AiFillLinkedin className='text-2xl text-blue-600' /></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </footer>
            {/* <footer class="footer">
                <div class="container">
                    <div class="row">
                        <div class="footer-col">
                            <h4>company</h4>
                            <ul class="ul">
                                <p class="company">We ensure better services and better quality at every product you might be interested in and we shall help grow better.</p>
                            </ul>
                        </div>
                        <div class="">
                            <h4>Popular Services</h4>
                            <ul class="ul">
                                <li>
                                    <a href="#" className='flex items-center'> 
                                        <BiChevronRight />
                                        BI Capability
                                    </a>
                                </li>
                                <li><a href="#"><BiChevronRight /> Cloud& Infra</a></li>
                                <li><a href="#"><BiChevronRight /> Data& Analytics</a></li>
                                <li><a href="#"><BiChevronRight /> Digital Strategy& Design</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>Contact Us</h4>
                            <ul class="ul">
                                <li><a href="#">bag</a></li>
                                <li><a href="#">shoes</a></li>
                                <li><a href="#">dress</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>follow us</h4>
                            <div class="social-links"> 
                                <a href="#"><i class="fab fa-linkedin-in"></i></a> 
                            </div>
                        </div>
                    </div>
                </div>
            </footer> */}
        </div>
    )
}

export default Footer