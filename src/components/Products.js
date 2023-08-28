import React from 'react';
import BI from '../assets/bi.png';
import Cloud from '../assets/cloud.png';
import Data from '../assets/data.png';
import Strategy from '../assets/digital-strategy.png';


const Products = () => {





    return (
        <div className='bg-[#F6F6F6] r'>
            <div className="max-w-screen-xl mx-auto py-20 px-5">
                <p className="uppercase text-sm font-medium tracking-wide text-gray-500">Services</p>
                <h2 className="mt-3 mb-6 text-3xl font-bold text-[#1D165B]">Explore More Offerings</h2>
                {/* <div className="rounded">
                    <div className="circle"></div>
                </div> */}
                <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-4">

                    <div className="flex flex-col p-5">
                        <div className="flex items-center justify-center service_item-icon">
                            <img src={BI} alt="" className='w-12 -mt-3' />
                        </div>
                        
                        <div className="dot_animation">
                            <div className="one"></div>
                            <div className="two"></div>
                            <div className="three"></div>
                            <div className="four"></div>
                        </div>


                        <div className="p-5">
                            <h6 className="mb-2 font-bold text-[#1D165A] font-sans text-xl leading-5">BI Capability</h6>
                            <p className="mb-3 text-gray-900">
                                Successful BI requires the ability to harness data for better decision making that helps your organization evolve.
                            </p>
                            <a href="/" aria-label="" className="hover:underline text-[#3A75F5] inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 text-sm">Learn more</a>
                        </div>
                    </div>

                    
                    <div className="flex flex-col p-5">
                        <div className="flex items-center justify-center service_item-icon">
                            <img src={Cloud} alt="" className='w-12 -mt-3' />
                        </div>

                        <div className="dot_animation">
                            <div className="one"></div>
                            <div className="two"></div>
                            <div className="three"></div>
                            <div className="four"></div>
                        </div>

                        <div className="p-5">
                            <h6 className="mb-2 text-[#1D165A] font-bold font-sans text-xl leading-5">Cloud & Infra</h6>
                            <p className="mb-3 text-gray-900">
                                Imagine new business models, unlock growth, increase agility and lower cost through cloud and infrastructure modernization.
                            </p>
                            <a href="/" aria-label="" className="hover:underline text-[#3A75F5] inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 text-sm">Learn more</a>
                        </div>
                    </div>

                    <div className="flex flex-col  p-5">

                        <div className="flex items-center justify-center service_item-icon">
                            <img src={Data} alt="" className='w-12 -mt-3' />
                        </div>

                        <div className="dot_animation">
                            <div className="one"></div>
                            <div className="two"></div>
                            <div className="three"></div>
                            <div className="four"></div>
                        </div>
                        <div className="p-5">
                            <h6 className="mb-2 text-[#1D165A] font-bold font-sans text-xl leading-5">Data Analytics</h6>
                            <p className="mb-3 text-gray-900">
                                Imagine new business models, unlock growth, increase agility and lower cost through cloud and infrastructure modernization.
                            </p>
                            <a href="/" aria-label="" className="hover:underline text-[#3A75F5] inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 text-sm">Learn more</a>
                        </div>
                    </div>

                    <div className="flex flex-col p-5">

                        <div className="flex items-center justify-center service_item-icon">
                            <img src={Strategy} alt="" className='w-12 -mt-3' />
                        </div>

                        <div className="dot_animation">
                            <div className="one"></div>
                            <div className="two"></div>
                            <div className="three"></div>
                            <div className="four"></div>
                        </div>

                        <div className="p-5">
                            <h6 className="mb-2 text-[#1D165A] font-bold font-sans text-xl leading-5">Digital Strategy & Design</h6>
                            <p className="mb-3 text-gray-900">
                                Develop a clear digital vision and get on the right path to successful digital transformation.
                            </p>
                            <a href="/" aria-label="" className="hover:underline text-[#3A75F5] inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 text-sm">Learn more</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Products;