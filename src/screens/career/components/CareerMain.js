import React from 'react';
import Work from '../../../assets/career/office.png';

const CareerMain = () => {
    return (
        <div>
            <div className="">
                <div className="max-w-screen-xl mx-auto mt-20 px-5">
                    <div className="mb-20">
                        <div className="text-center font-bold text-md ">Careers at GWC</div>
                        <div className="mt-6 text-center font-bold text-4xl">You belong at GWC</div>
                        <div className="text-center max-w-4xl mx-auto mt-7 mb-0">
                            There’s so much more to a career than the work — especially at GWC. Every person brings unique skills and perspectives to our team, so we’re building a workplace where more people can thrive.
                        </div>
                        <div className="text-center max-w-3xl mx-auto mt-3 mb-0">
                            From our inclusive culture that encourages opinions to hybrid schedules that let you put your life first, explore why GWC is the best place to be yourself. You’ll also build amazing things that make a difference for people around the world. So the work is really cool, too.
                        </div>
                    </div>


                    <form role="search" className='career_search_form'>
                        <label for="search" className='career_search_label'>Search for stuff</label>
                        <input id="search" type="text" placeholder="Search..." autofocus required className='career_search_input' />
                        <button type="submit" className='career_search_btn'>Go</button>
                    </form>
                </div>
                <div className="max-w-screen-xl mx-auto mt-10 mb-20 px-5">
                    <div className="grid grid-cols-2 gap-5">
                        <div className="border p-4 rounded-md sahdow">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <img src={Work} alt="" className='w-11 bg-[#F7FAFC] p-2 rounded-lg' />
                                    <div className="ml-3 text-lg font-medium">Senior Software Engineer</div>
                                </div>
                                <div className="font-bold">₹ 7L - 9L <span className='text-sm font-medium'>/ Year</span></div>
                            </div>
                            <div className="flex justify-between items-center mt-6">
                                <div className="flex items-center">
                                    <div className="bg-[#bde0fe] py-2 px-4 rounded-full text-sm">Fulltime</div>
                                    <div className="bg-[#bde0fe] py-2 px-4 rounded-full text-sm mx-5">Engineering</div>
                                    <div className="bg-[#bde0fe] py-2 px-4 rounded-full text-sm">Software</div>
                                </div>
                                <div className="">
                                    <a href="#" target='_blank' className='bg-[#3875F4] text-white py-3 px-7 rounded-lg'>Apply Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="border p-4 rounded-md sahdow">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <img src={Work} alt="" className='w-11 bg-[#F7FAFC] p-2 rounded-lg' />
                                    <div className="ml-3 text-lg font-medium">Senior UI/UX Designer</div>
                                </div>
                                <div className="font-bold">₹ 4L - 5L <span className='text-sm font-medium'>/ Year</span></div>
                            </div>
                            <div className="flex justify-between items-center mt-6">
                                <div className="flex items-center">
                                    <div className="bg-[#bde0fe] py-2 px-4 rounded-full text-sm">Fulltime</div>
                                    <div className="bg-[#bde0fe] py-2 px-4 rounded-full text-sm mx-5">Design</div>
                                    <div className="bg-[#bde0fe] py-2 px-4 rounded-full text-sm">Remote</div>
                                </div>
                                <div className="">
                                    <a href="#" target='_blank' className='bg-[#3875F4] text-white py-3 px-7 rounded-lg'>Apply Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="border p-4 rounded-md sahdow">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <img src={Work} alt="" className='w-11 bg-[#F7FAFC] p-2 rounded-lg' />
                                    <div className="ml-3 text-lg font-medium">Software Engineer</div>
                                </div>
                                <div className="font-bold">₹ 6L - 7L <span className='text-sm font-medium'>/ Year</span></div>
                            </div>
                            <div className="flex justify-between items-center mt-6">
                                <div className="flex items-center">
                                    <div className="bg-[#bde0fe] py-2 px-4 rounded-full text-sm">Fulltime</div>
                                    <div className="bg-[#bde0fe] py-2 px-4 rounded-full text-sm mx-5">Engineering</div>
                                    <div className="bg-[#bde0fe] py-2 px-4 rounded-full text-sm">Software</div>
                                </div>
                                <div className="">
                                    <a href="#" target='_blank' className='bg-[#3875F4] text-white py-3 px-7 rounded-lg'>Apply Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="border p-4 rounded-md sahdow">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <img src={Work} alt="" className='w-11 bg-[#F7FAFC] p-2 rounded-lg' />
                                    <div className="ml-3 text-lg font-medium">AWS Cloud Engineer</div>
                                </div>
                                <div className="font-bold">₹ 12L - 14L <span className='text-sm font-medium'>/ Year</span></div>
                            </div>
                            <div className="flex justify-between items-center mt-6">
                                <div className="flex items-center">
                                    <div className="bg-[#bde0fe] py-2 px-4 rounded-full text-sm">Fulltime</div>
                                    <div className="bg-[#bde0fe] py-2 px-4 rounded-full text-sm mx-5">AWS</div>
                                    <div className="bg-[#bde0fe] py-2 px-4 rounded-full text-sm">Clouds</div>
                                </div>
                                <div className="">
                                    <a href="#" target='_blank' className='bg-[#3875F4] text-white py-3 px-7 rounded-lg'>Apply Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CareerMain;