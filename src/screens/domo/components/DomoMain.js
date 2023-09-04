import React from 'react';
import Dot from '../../../assets/decor-1.png';
import DomoBenefits from '../../../assets/domo/domo_denefits.gif';
import GWCLogo from '../../../assets/logo.png';
import DomoLogo from '../../../assets/domo/logo.svg';
import Partner from '../../../assets/domo/agreement.png';


const DomoMain = () => {
    return (
        <div className='mb-20'>
            <div className="">
                <div className="domo_info max-w-screen-xl mx-auto my-10 py-20 px-5">
                    <div className="grid grid-cols-2 gap-5">
                        <div className="">
                            <div className='text-xl font-medium text-[#111111]'>GWC’s Partnership With DOMO: Unlocking The Power Of Data Analytics</div>
                            <div className='mt-3 text-[15px]'>GWC specialize in providing innovative solutions for businesses looking to leverage their data for growth and success. Our team of over 20+ architect-level certified professionals has established us as a trusted partner for companies looking to take their data analytics capabilities to the next level.</div>
                            <div className="mt-5 text-[15px]">We take pride in announcing that GWC was the first analytics company in India to form a partnership with DOMO, a cloud-based business intelligence and data visualization platform. Over the course of a year, our collaboration has resulted in over 10+ Domo Architect level certifications. Additionally, we successfully organized the Data Analytics Summit 2022 in association with Domo, highlighting our ability to deliver quality events and engage with the global analytics community.</div>
                        </div>
                        <div className="">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/3Qox7Be7ATM?si=4Om0wIHeEYPKMhg7?controls=0" title="YouTube video player" frameborder="0" allow="autoplay" allowfullscreen className='rounded-md'></iframe>
                        </div>
                    </div>
                </div>
                <div className=" max-w-screen-xl mx-auto p-10 pb-5 px-5">
                    <div className='text-xl font-medium text-[#111111] mb-2'>Benefits of working with GWC and DOMO</div>
                    <img src={Dot} alt="decoration" />
                    <div className='mt-3 text-[15px]'>As an analytics company, GWC helps businesses of all sizes harness the power of data analytics to drive growth and success. Our partnership with DOMO, a leading data visualization and business intelligence platform, allows us to provide even more value to our clients through.</div>
                    <div className="domo_benefits mt-10">
                        <div className="domo_card_1 p-4 shadow  h-fit border-2">
                            <div className="mb-2 text-lg font-bold uppercase text-[#111111]">Enhanced data visualization and analysis</div>
                            <div className="text-[15px]">DOMO’s cloud-based platform makes it easy for businesses to connect, prepare, visualize, and share data in real-time. Our team of experts can help you set up and optimize your DOMO instance to ensure that you’re getting the most out of your data. We have also built custom data connectors that allow you to seamlessly integrate data from a variety of sources into DOMO, making it even easier to access and analyse your data.</div>
                        </div>
                        <div className="domo_card_2 p-4 shadow  h-fit border-2">
                            <div className="mb-2 text-lg font-bold uppercase text-[#111111]">Customized solutions</div>
                            <div className="text-[15px]">We understand that every business is unique, and we work closely with our clients to develop customized solutions that meet their specific needs. Our expertise in both data analytics and the DOMO platform allows us to provide tailored solutions that help businesses achieve their goals. We have also built custom visuals that help you better understand and communicate your data, making it easier to make data-driven decisions.</div>
                        </div>
                        <div className="domo_card_3">
                            <img src={DomoBenefits} alt="" />
                        </div>
                        <div className="domo_card_4 p-4 shadow  h-fit border-2">
                            <div className="mb-2 text-lg font-bold uppercase text-[#111111]">Rapid deployment</div>
                            <div className="text-[15px]">Our partnership with DOMO means that we can deploy solutions quickly and efficiently, allowing you to start seeing results sooner.</div>
                        </div>
                        <div className="domo_card_5 p-4 shadow  h-fit border-2 -mt-6">
                            <div className="mb-2 text-lg font-bold uppercase text-[#111111]">Ongoing support and maintenance</div>
                            <div className="text-[15px]">We provide ongoing support and maintenance for all of our solutions to ensure that they continue to deliver value over time. Our team of experts is always available to answer questions and help you troubleshoot any issues that arise.</div>
                        </div>
                    </div>
                    <div className="max-w-screen-xl mx-auto my-0 domo_gwc rounded-md p-10">
                        <div className="flex items-center justify-center">
                            <img src={GWCLogo} alt="" className='w-36' />
                            <img src={Partner} alt="" className='w-20 mx-10' />
                            <img src={DomoLogo} alt="" className='w-40' />
                        </div>
                        <div className="text-[15px] mt-7 text-center">
                            At GWC, we’re passionate about helping businesses unlock the power of data analytics. Our partnership with DOMO, a cloud-based platform for data visualization and business intelligence, allows us to provide even more value to our clients through enhanced data visualization and analysis, customized solutions, rapid deployment, and ongoing support and maintenance. If you’re interested in learning more about how our data analytics solutions can benefit your business, contact us today.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DomoMain;