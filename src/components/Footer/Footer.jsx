import React from 'react';
import Logo from '../../assets/logo.png'
import { Link } from 'react-router';


const Footer = () => {
    return (
         <div className='bg-[#001931] text-[#fff] w-full pt-12'>
            <div className='mx-auto mx-10 lg:mx-20 flex justify-center'>
                <div className='max-w-[1440px] w-full '>
                    <div className='flex flex-wrap justify-between'>
                        <div>
                            <img src={Logo} alt="" />
                        </div>
                        <div>
                            <p className='font-medium text-[18px] lg:text-[20px]'>Social Links</p>
                            <ul className='flex gap-2'>
                                <li>
                                    <Link to="/faceook" className='w-[20px] h-[20px] bg-[#fff] flex justify-center items-center rounded-full'> 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <path d="M6.84365 4.97617L11.1245 0H10.1101L6.39301 4.32075L3.42419 0H0L4.48944 6.53373L0 11.752H1.01449L4.93984 7.18916L8.07513 11.752H11.4993L6.84339 4.97617H6.84365ZM1.38002 0.7637H2.93821L10.1106 11.023H8.55237L1.38002 0.7637Z" fill="black"/>
                                        </svg>    
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/faceook" className='w-[20px] h-[20px] bg-[#fff] flex justify-center items-center rounded-full'> 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                                        <path d="M11.1498 6.53178V10.6546H8.75949V6.80809C8.75949 5.84228 8.41438 5.18272 7.54893 5.18272C6.88848 5.18272 6.49613 5.62676 6.32286 6.05672C6.25994 6.21038 6.24372 6.42376 6.24372 6.63927V10.6544H3.85326C3.85326 10.6544 3.88534 4.13972 3.85326 3.46536H6.24389V4.48412C6.23908 4.49214 6.23231 4.49998 6.22803 4.50765H6.24389V4.48412C6.56155 3.99533 7.12806 3.29655 8.39816 3.29655C9.97077 3.29655 11.1498 4.32404 11.1498 6.53178ZM1.35263 0C0.534956 0 0 0.536739 0 1.24193C0 1.93215 0.519448 2.4844 1.32126 2.4844H1.33677C2.17049 2.4844 2.68887 1.93215 2.68887 1.24193C2.673 0.536739 2.17049 0 1.35263 0ZM0.142073 10.6546H2.53164V3.46536H0.142073V10.6546Z" fill="black"/>
                                        </svg>  
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/faceook" className='w-[20px] h-[20px] bg-[#fff] flex justify-center items-center rounded-full'> 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="17" viewBox="0 0 9 17" fill="none">
                                        <path d="M7.99414 8.98438L8.4375 6.09375H5.66406V4.21793C5.66406 3.42711 6.05148 2.65625 7.29371 2.65625H8.55469V0.195312C8.55469 0.195312 7.41031 0 6.31621 0C4.03199 0 2.53906 1.38438 2.53906 3.89063V6.09375H0V8.98438H2.53906V15.9722C3.0482 16.0521 3.57 16.0938 4.10156 16.0938C4.63312 16.0938 5.15492 16.0521 5.66406 15.9722V8.98438H7.99414Z" fill="black"/>
                                        </svg>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='border-t border-[#E5E7EB]/20 text-center py-7.25'>
                        <p>Copyright © 2025 - All right reserved</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;