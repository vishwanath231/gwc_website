import React from 'react'
import Dot from '../../../assets/decor-1.png';
import GCP_GIF from '../../../assets/gcp_gif.gif';
import Flexibility from '../../../assets/gcp/flexibility.png';
import Reliability from '../../../assets/gcp/reliability.png';
import Network from '../../../assets/gcp/localization.png';
import Learning from '../../../assets/gcp/deep-learning.png';
import Cost from '../../../assets/gcp/save-money.png';
import GCP_GIF2 from '../../../assets/gcp/gwc_gcp.gif';


const GCP_Card = () => {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto py-20 px-5">
                <div className="grid grid-cols-2 gap-4">
                    <div className="">
                        <div className="uppercase text-md font-bold tracking-wide text-gray-500">GCP</div>
                        <div className="mt-2 mb-6 text-3xl font-bold gcp_headline">Empowering Businesses With Cutting-Edge Cloud Solutions</div>
                        <img src={Dot} alt="decoration" />
                        <p className='mt-5'>Are you looking for a powerful and flexible cloud computing solution to take your business to new heights? Look no further than Google Cloud Platform (GCP). GCP offers a comprehensive suite of cloud-based services and tools designed to meet the evolving needs of modern businesses. In partnership with GWC, an industry-leading analytics company, GCP provides even more value by unlocking the full potential of your data and enabling data-driven decision-making.</p>
                    </div>
                    <div className="">
                        <img src={GCP_GIF} alt="GCP_GIF" />
                    </div>
                </div>
            </div>

            <div className="gcp_content">
                <div className="max-w-screen-xl mx-auto py-20 px-5">
                    <div className="mt-2 mb-6 text-3xl font-bold text-[#1D165B]">Empowering Businesses With Cutting-Edge Cloud Solutions</div>
                    <img src={Dot} alt="decoration" />
                    <p className='mt-5'>GCP is a top-tier cloud computing platform trusted by businesses of all sizes across industries. Here’s why GCP stands out from the competition</p>
                    <div className="parent mt-10">
                        <div className="div1 gcp_card-one bg-white shadow p-5">
                            <img src={Flexibility} alt="" className='w-16' />
                            <div className="uppercase font-bold mt-4 mb-2">Scalability and Flexibility</div>
                            <p className='text-sm'>With GCP, you can effortlessly scale your resources to match the demands of your business. Whether you’re starting small or experiencing rapid growth, GCP’s flexible infrastructure allows you to adjust capacity as needed, ensuring optimal performance at all times.</p>
                        </div>
                        <div className="div2 gcp_card-one bg-white shadow p-5">
                            <img src={Reliability} alt="" className='w-16' />
                            <div className="uppercase font-bold mt-4 mb-2">Reliability and Security</div>
                            <p className='text-sm'>With GCP, you can effortlessly scale your resources to match the demands of your business. Whether you’re starting small or experiencing rapid growth, GCP’s flexible infrastructure allows you to adjust capacity as needed, ensuring optimal performance at all times.</p>
                        </div>
                        <div className="div3 gcp_card-one bg-white shadow p-5">
                            <img src={Network} alt="" className='w-16' />
                            <div className="uppercase font-bold mt-4 mb-2">Global Network</div>
                            <p className='text-sm'>With GCP, you can effortlessly scale your resources to match the demands of your business. Whether you’re starting small or experiencing rapid growth, GCP’s flexible infrastructure allows you to adjust capacity as needed, ensuring optimal performance at all times.</p>
                        </div>
                        <div className="div4 gcp_card-one bg-white shadow p-5">
                            <img src={Learning} alt="" className='w-16' />
                            <div className="uppercase font-bold mt-4 mb-2">Advanced Analytics and Machine Learning</div>
                            <p className='text-sm'>With GCP, you can effortlessly scale your resources to match the demands of your business. Whether you’re starting small or experiencing rapid growth, GCP’s flexible infrastructure allows you to adjust capacity as needed, ensuring optimal performance at all times.</p>
                        </div>
                        <div className="div5 gcp_card-one bg-white shadow p-5">
                            <img src={Cost} alt="" className='w-16' />
                            <div className="uppercase font-bold mt-4 mb-2">Cost Efficiency</div>
                            <p className='text-sm'>With GCP, you can effortlessly scale your resources to match the demands of your business. Whether you’re starting small or experiencing rapid growth, GCP’s flexible infrastructure allows you to adjust capacity as needed, ensuring optimal performance at all times.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto bg-white shadow my-7 gcp_border">
                <div className="grid grid-cols-2">
                    <div className="">
                        <img src={GCP_GIF2} alt="GCP_GIF" />
                    </div>
                    <div className="bg-gray-50 p-5">
                        <p className='leading-7'>GWC’s proficiency in data visualization enhances your ability to communicate complex information effectively.<strong> GCP’s Data Studio and Looker enable you to create interactive dashboards and reports </strong>, providing stakeholders with actionable insights and fostering a data-driven culture within your organization. GWC’s expertise in predictive modeling and machine learning, coupled with GCP’s powerful machine learning tools, empowers you to build and deploy sophisticated models that predict outcomes, detect anomalies, and automate processes. Drive innovation and gain a competitive edge through data-driven predictions and automation.</p>
                        <p className='mt-6'>By partnering with GWC, GCP takes your business to the next level by harnessing the power of data analytics. GWC is a leading analytics company known for its expertise in data analysis, visualization, and predictive modeling.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GCP_Card;