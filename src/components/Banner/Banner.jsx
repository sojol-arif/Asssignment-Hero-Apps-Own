import React from 'react';
import appStoreBtn from '../../assets/appStoreBtn.png';
import googAppBtn from '../../assets/googAppBtn.png';
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import icon4 from '../../assets/icon4.png';
import icon5 from '../../assets/icon5.png';
import icon6 from '../../assets/icon6.png';
import iphone from "../../assets/Iphone.png";
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className='bg-[#f5f5f5] pt-[40px] lg:pt-[80px] px-10 lg:px-20'>
            <div className='flex flex-col items-center justify-center text-center'>
                <h1 className='text-[#001931] font-[Inter, sans-serif] font-bold text-[40px] lg:text-[72px] leading-[1.2]'>We Build <br/>
                    <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text font-black'>Productive </span>Apps
                </h1>
                <p className='text-[#627382] text-[16px] lg:text-[20px] leading-[1.4] pt-4'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br></br>Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='btn_box flex-wrap justify-center flex gap-4 my-9 lg:my-14'>
                    <Link to="https://play.google.com/store/games?hl=en" className='flex flex-wrap items-center gap-2 rounded-[4px] border border-[#D2D2D2] px-6 py-3 text-[18px] lg:text-[20px] text-[#001931] font-semibold hover:shadow-[0_5px_10px_-2px_rgba(0,0,0,0.1)] transition duration-300'> <img src={googAppBtn}/> Google Play</Link>
                    <Link to="https://www.apple.com/app-store/" className='flex flex-wrap items-center gap-2 rounded-[4px] border border-[#D2D2D2] px-6 py-3 text-[18px] lg:text-[20px] text-[#001931] font-semibold hover:shadow-[0_5px_10px_-2px_rgba(0,0,0,0.1)] transition duration-300'>  <img src={appStoreBtn}/> App Store</Link>
                </div>
                <div className='iphpne_box flex flex-wrap gap-[40px] mb-7 xl:mb-0'>
                    <div className='w-[100%] lg:w-[200px] flex flex-col gap-[40px] items-center lg:items-start'> 
                        <div className='lg:ml-[120px] md:mt-[80px]'><img className='max-w-[80px]' src={icon1} alt="" /></div>
                        <div className='lg:ml-[40px]'><img className='max-w-[80px]' src={icon2} alt="" /></div>
                        <div><img className='max-w-[80px]' src={icon3} alt="" /></div>
                    </div>
                    <div className='flex justify-center w-full lg:w-auto'>
                        <div><img className='max-w-[100%] md:max-w-[442px]' src={iphone} alt="" /></div>
                    </div>
                    <div className='w-[100%] lg:w-[200px] flex flex-col gap-[40px] items-center lg:items-start'> 
                        <div><img className='max-w-[80px] md:mt-[80px]' src={icon4} alt="" /></div>
                        <div className='lg:ml-[80px]'><img className='max-w-[80px]' src={icon5} alt="" /></div>
                        <div className='lg:ml-[120px]'><img className='max-w-[80px]' src={icon6} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;