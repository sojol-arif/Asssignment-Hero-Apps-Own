import React from 'react';
import { useLoaderData } from 'react-router';
import Product from "../../src/components/Product/Product"
import { Link } from 'react-router';

const TrendingApps = () => {
    const dataProduct = useLoaderData();

    const sliceProduct = dataProduct.slice(0, 8);
    
    return (
        <div className='my-10 lg:my-20 mx-auto mx-10 lg:mx-20 flex justify-center'>
            <div className='max-w-[1440px]'>
                <div className='text-center mb-7 lg:mb-10'>
                    <h2 className='font-bold text-[32px] lg:text-[48px]'>Trending Apps</h2>
                    <p className='text-[16px] lg:text-[20px]'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                    {sliceProduct.map(productItem=> (
                        <Product key={productItem.id} productItem={productItem}></Product>
                    ))}
                </div>
                <div className='flex items-center justify-center mt-10'>
                    <Link to="/apps" className='font-semibold text-[16px] rounded-[4px] bg-linear-[145deg,#632EE3_0%,#9F62F2_100%] px-4 py-3 min-w-[145px] text-[#fff] text-center'>
                        Show All
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TrendingApps;