import React from 'react';
import Google from '../../../assets/google_cloud.png';
import Looker from '../../../assets/looker.png';
import Domo from '../../../assets/domo.png';
import Azure from '../../../assets/azure.png';
import Power from '../../../assets/power_bi.png';
import { BsBoxArrowInUpRight } from 'react-icons/bs';

const Products = () => {
    return (
        <div className="service_container">
            <div className="max-w-screen-xl mx-auto px-5">
                <div className="grid grid-cols-3 gap-6 justify-center items-center">
                    <div className="shadow p-6 h-fit border-b-4 border-[#5F6368] hover:-mt-1 relative bg-white"
                        data-aos="fade-right"
                        data-aos-offset="100"
                        data-aos-delay="100"
                    >
                        <a href="#" className='absolute top-5 right-5'><BsBoxArrowInUpRight className='text-black text-xl' /></a>
                        <img src={Google} alt="" className='w-80 mx-auto mt-0 mb-2' />
                        <p className='mb-5'>We empower businesses with solutions on Google Cloud to drive innovation and cloud transformation, at scale.</p>
                    </div>
                    <div className="shadow p-6 mt-56 border-b-4 border-[#7E64E0] relative bg-white"
                        data-aos="fade"
                        data-aos-offset="200"
                        data-aos-delay="200"
                    >
                        <a href="#" className='absolute top-5 right-5'><BsBoxArrowInUpRight className='text-black text-xl' /></a>
                        <img src={Looker} alt="" className='w-32 mx-auto mt-0 mb-8' />
                        <p className='mb-5'>We empower businesses with solutions on Google Cloud to drive innovation and cloud transformation, at scale.</p>
                    </div>
                    <div className="shadow p-6 h-fit border-b-4 border-[#9BCEEF] hover:-mt-1 relative bg-white"
                        data-aos="fade-left"
                        data-aos-offset="150"
                        data-aos-delay="150"
                    >
                        <a href="#" className='absolute top-5 right-5'><BsBoxArrowInUpRight className='text-black text-xl' /></a>
                        <img src={Domo} alt="" className='w-40 mx-auto -mt-1 mb-0' />
                        <p className='mb-5'>We empower businesses with solutions on Google Cloud to drive innovation and cloud transformation, at scale.</p>
                    </div>
                    <div className="shadow p-6 -mt-28 h-fit border-b-4 border-[#008AD7] relative bg-white"
                        data-aos="fade-right"
                        data-aos-offset="250"
                        data-aos-delay="250"
                    >
                        <a href="#"  className='absolute top-5 right-5'><BsBoxArrowInUpRight className='text-black text-xl' /></a>
                        <img src={Azure} alt="" className='w-48 mx-auto mt-0 mb-7' />
                        <p className='mb-5'>We empower businesses with solutions on Google Cloud to drive innovation and cloud transformation, at scale.</p>
                    </div>
                    <div></div>
                    <div className="shadow p-6 -mt-28 h-fit border-b-4 border-[#F1C80E] relative bg-white"
                        data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-delay="300"
                    >
                        <a href="#" className='absolute top-5 right-5'><BsBoxArrowInUpRight className='text-black text-xl' /></a>
                        <img src={Power} alt="" className='w-52 mx-auto mt-0 mb-7' />
                        <p className='mb-5'>We empower businesses with solutions on Google Cloud to drive innovation and cloud transformation, at scale.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;