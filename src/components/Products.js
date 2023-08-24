import React from 'react';
import BI from '../assets/bi.png';
import Cloud from '../assets/cloud.png';
import Data from '../assets/data.png';
import Strategy from '../assets/digital-strategy.png';


const Products = () => {





    return (
        <div className='my-10'>
            <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div class="md:mb-12">
                    <div>
                        <p class="text-[#3A75F5] inline-block py-px mb-4 text-lg font-semibold tracking-wider uppercase rounded-full">
                            Services
                        </p>
                    </div>
                    <h2 class="mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900">
                        Explore More Offerings
                    </h2>
                </div>
                <div class="grid gap-5 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    <div class="flex flex-col justify-between p-5  rounded  bg-white h-fit box_shadow"
                        data-aos="fade-up"
                        data-aos-offset="100"
                        data-aos-delay="100"
                    >
                        <div>
                            <div class="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-indigo-50">
                                <img src={BI} alt="" className='w-12' />
                            </div>
                            <h6 class="mb-2 font-bold font-sans text-xl leading-5">BI Capability</h6>
                            <p class="mb-3 text-gray-900">
                                Successful BI requires the ability to harness data for better decision making that helps your organization evolve.
                            </p>
                        </div>
                        <a href="/" aria-label="" class="hover:underline text-[#3A75F5] inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 text-sm">Learn more</a>
                    </div>
                    <div class="flex flex-col justify-between p-5  rounded  bg-white mt-8 h-fit box_shadow"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="200"
                    >
                        <div>
                            <div class="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-indigo-50">
                                <img src={Cloud} alt="" className='w-12' />
                            </div>
                            <h6 class="mb-2 font-bold font-sans text-xl leading-5">Cloud & Infra</h6>
                            <p class="mb-3 text-gray-900">
                                Imagine new business models, unlock growth, increase agility and lower cost through cloud and infrastructure modernization.
                            </p>
                        </div>
                        <a href="/" aria-label="" class="hover:underline text-[#3A75F5] inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 text-sm">Learn more</a>
                    </div>
                    <div class="flex flex-col justify-between p-5  rounded  bg-white mt-16 h-fit box_shadow"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="300">
                        <div>
                            <div class="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-indigo-50">
                                <img src={Data} alt="" className='w-12' />
                            </div>
                            <h6 class="mb-2 font-bold font-sans text-xl leading-5">Data Analytics</h6>
                            <p class="mb-3 text-gray-900">
                                Imagine new business models, unlock growth, increase agility and lower cost through cloud and infrastructure modernization.
                            </p>
                        </div>
                        <a href="/" aria-label="" class="hover:underline text-[#3A75F5] inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 text-sm">Learn more</a>
                    </div>
                    <div class="flex flex-col justify-between p-5  rounded  bg-white mt-28 h-fit box_shadow"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="400">
                        <div>
                            <div class="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-indigo-50">
                                <img src={Strategy} alt="" className='w-12' />
                            </div>
                            <h6 class="mb-2 font-bold font-sans text-xl leading-5">Digital Strategy & Design</h6>
                            <p class="mb-3 text-gray-900">
                                Develop a clear digital vision and get on the right path to successful digital transformation.
                            </p>
                        </div>
                        <a href="/" aria-label="" class="hover:underline text-[#3A75F5] inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 text-sm">Learn more</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Products;