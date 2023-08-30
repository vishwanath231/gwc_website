import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Dot from '../assets/decor-1.png';
import Problem from '../assets/features/idea.png';
import Build from '../assets/features/design.png';
import Preparation from '../assets/features/checklist.png';
import Experience from '../assets/features/experience.png';
import Analyzed from '../assets/features/interpretation.png';
import Deploy from '../assets/features/rocket.png';

const Features = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: false,
        speed: 1,
        autoplaySpeed: 1,
        cssEase: "linear"
    };

    return (
        <div className='feature_container'>
            <div className="max-w-screen-xl mx-auto py-20 px-5">
                <div className="uppercase text-sm font-medium tracking-wide text-gray-500">features</div>
                <div className="mt-3 mb-2 text-3xl font-bold text-[#1D165B]">Build A Powerful Analytic Approach</div>
                <img src={Dot} alt="decoration" />
                <div className="max-w-4xl text-sm mt-4">We build strategic data analytics platforms helping businesses gain value from their data assets and extend their capabilities to truly data-driven decision making.</div>
        
                <Slider {...settings} className='mt-6'>
                    <div className="">
                        <div className="bg-white  mr-5 my-5">
                            <div className="feature_box relative p-5 rounded-md">
                                <img src={Problem} className='w-20' alt="" />
                                <div className="text-[#1D165B] text-lg font-bold mt-5 mb-2">Problem</div>
                                <div className="text-sm font-normal leading-6">Getting to define a problem is presumably one of the most intricate and vigorously dismissed stages in the data analytics pipeline. This stage required rigorous analysis and understanding of the market. Tools and techniques combined to get the best ideas that work into action.</div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="bg-white ml-5 my-5">
                            <div className="feature_box relative p-5 rounded-md">
                                <img src={Problem} className='w-20' alt="" />
                                <div className="text-[#1D165B] text-lg font-bold mt-5 mb-2">Build</div>
                                <div className="text-sm font-normal leading-6">A business dashboard offers at-a-glance insights based on key performance indicators (KPIs) and is an intuitive and visually pleasing way to consume data. We believe the goal of each interactive dashboard you create should be better, faster, and stronger decision making while telling a story.</div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="bg-white mr-5 my-5">
                            <div className="feature_box relative p-5 rounded-md">
                                <img src={Problem} className='w-20' alt="" />
                                <div className="text-[#1D165B] text-lg font-bold mt-5 mb-2">Preparation</div>
                                <div className="text-sm font-normal leading-6">Data preparation is the process of gathering, combining, structuring and organizing data so it can be used in business intelligence (BI), analytics and data visualization applications. The components of data preparation include data preprocessing, profiling, cleansing, validation and transformation.</div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="bg-white ml-5 my-5">
                            <div className="feature_box relative p-5 rounded-md">
                                <img src={Problem} className='w-20' alt="" />
                                <div className="text-[#1D165B] text-lg font-bold mt-5 mb-2">Experience</div>
                                <div className="text-sm font-normal leading-6">The dashboard design process starts with defining our stakeholders and determining what decisions they need to make; we then determine what metrics would support those decisions. Next, we prototype dashboards with pen and paper, get feedback, and iterate.</div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="bg-white mr-5 my-5">
                            <div className="feature_box relative p-5 rounded-md">
                                <img src={Problem} className='w-20' alt="" />
                                <div className="text-[#1D165B] text-lg font-bold mt-5 mb-2">Analyzed</div>
                                <div className="text-sm font-normal leading-6">In Depth understanding of data makes an ease move to take right decisions Prior design a solution. This stage involves detailed examination of complex data to find solutions to various problems and make concrete decisions with action plans to solve any problems.</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="">
                        <div className="bg-white ml-5 my-5">
                            <div className="feature_box relative p-5 rounded-md">
                                <img src={Problem} className='w-20' alt="" />
                                <div className="text-[#1D165B] text-lg font-bold mt-5 mb-2">Deploy</div>
                                <div className="text-sm font-normal leading-6">Once the dashboard has been built and tested, it is then deployed into production and security requirements are implemented. With the dashboard in production or "live," steps must also be taken to provide for ongoing maintenance.</div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Features;