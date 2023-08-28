import React from 'react'

const Counter = () => {
    return (
        <div className="">
            <div className="max-w-screen-xl mx-auto pb-20 px-5">
                <div className="grid grid-cols-4 gap-10">
                    <div className="flex items-center">
                        <h2 className='text-[60px] font-medium text-[#3875F4]'>20+</h2>
                        <div className='text-xl font-medium text-[#1D165B] ml-2'>Happy <br /> Clients</div>
                    </div>
                    <div className="flex items-center">
                        <h2 className='text-[60px] font-medium text-[#3875F4]'>500+</h2>
                        <div className='text-xl font-medium text-[#1D165B] ml-2'>Project <br /> Completed</div>
                    </div>
                    <div className="flex items-center">
                        <h2 className='text-[60px] font-medium text-[#3875F4]'>120+</h2>
                        <div className='text-xl font-medium text-[#1D165B] ml-2'>Employees</div>
                    </div>
                    <div className="flex items-center">
                        <h2 className='text-[60px] font-medium text-[#3875F4]'>30+</h2>
                        <div className='text-xl font-medium text-[#1D165B] ml-2'>Solutions <br /> Provided</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter