import React from 'react';

const Trusted = () => {
    return (
        <div className='text-[#fff] bg-linear-[125deg,#9F62F2_0%,#632EE3_100%] p-10 lg:p-20 text-center'>
            <h2 className='font-bold text-[32px] lg:text-[48px]'>Trusted by Millions, Built for You</h2>
            <ul className='flex flex-wrap gap-6 mx-auto justify-center mt-7 lg:mt-10'>
                <li className='flex-1'>
                    <span>Total Downloads</span>
                    <p className='font-extrabold loading-[1.2] text-[40px] lg:text-[64px]'>29.6M</p>
                    <span>21% more than last month</span>
                </li>
                <li className='flex-1'>
                    <span>Total Reviews</span>
                    <p className='font-extrabold loading-[1.2] text-[40px] lg:text-[64px]'>906K</p>
                    <span>46% more than last month</span>
                </li>
                <li className='flex-1'>
                    <span>Active Apps</span>
                    <p className='font-extrabold loading-[1.2] text-[40px] lg:text-[64px]'>132+</p>
                    <span>31 more will Launch</span>
                </li>
            </ul>
        </div>
    );
};

export default Trusted;