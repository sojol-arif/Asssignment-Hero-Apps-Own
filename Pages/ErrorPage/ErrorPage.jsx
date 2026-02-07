import React from 'react';
import errorImg from '../../src/assets/404.png'
import { Link } from 'react-router';
import Navbar from "../../src/components/Header/Navbar"

const ErrorPage = () => {
    return (
        <div>
            <title>Error Page</title>
            <Navbar></Navbar>
            <div className='px-10 lg:px-20 mx-auto'>
                <div className='max-w-[1440px] mx-auto'>
                    <div className='text-center flex justify-center flex-col items-center'>
                        <img className='mb-8 mt-20 max-w-[300px]' src={errorImg} alt="" />
                        <h2 className='font-semibold text-[36px] lg:text-[48px] text-[#001931] text-center'>Oops, page not found!</h2>
                        <p className='text-[#627382] text-[18px] lg:text-[20px] text-center'>The page you are looking for is not available.</p>
                        <Link to={"/"} className='flex items-center justify-center mt-4'>
                            <button className='font-semibold text-[16px] rounded-[4px] bg-linear-[145deg,#632EE3_0%,#9F62F2_100%] px-5 py-3 min-w-[145px] text-[#fff] text-center'>
                                Go Back!
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;