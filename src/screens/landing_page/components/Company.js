import React from 'react'
import Company1 from '../../../assets/company/1.png';
import Company2 from '../../../assets/company/22.png';
import Company3 from '../../../assets/company/3.png';
import Company4 from '../../../assets/company/4.png';
import Company5 from '../../../assets/company/5.png';
import Company6 from '../../../assets/company/6.png';
import Company7 from '../../../assets/company/7.png';

const Company = () => (
    <div class="company_slider">
        <div className="max-w-screen-xl mx-auto px-5">
            <div class="slide-track">
                <div class="slide">
                    <img src={Company1} alt="company one" className='w-full h-full object-contain' />
                </div>
                <div class="slide">
                    <img src={Company2} alt="company two" className='w-full h-full object-contain' />
                </div>
                <div class="slide">
                    <img src={Company3} alt="company three" className='w-full h-full object-contain' />
                </div>
                <div class="slide">
                    <img src={Company4} alt="company four" className='w-full h-full object-contain' />
                </div>
                <div class="slide">
                    <img src={Company5} alt="company five" className='w-full h-full object-contain' />
                </div>
                <div class="slide">
                    <img src={Company6} alt="company six" className='w-full h-full object-contain' />
                </div>
                <div class="slide">
                    <img src={Company7} alt="company seven" className='w-full h-full object-contain' />
                </div>
            </div>
        </div>
    </div>
);

export default Company;