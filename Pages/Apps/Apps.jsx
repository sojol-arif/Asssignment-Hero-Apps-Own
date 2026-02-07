import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Product from '../../src/components/Product/Product';
import { Link } from 'react-router';
import appsNoFound from '../../src/assets/appsNoFound.png'
import { useEffect } from 'react';
import logoIcon from "../../src/assets/logo-icon.png"
import "../../src/App.css"

const Apps = () => {
    const [loading, setLoading] = useState(true);

    const [searchLoading, setSearchLoading] = useState(false);
    const dataProduct = useLoaderData();
    const [jsonFile, setJsonFile] = useState(dataProduct);
    const [searhFilter, setSearchFilter] = useState("");

    const handleSearch = (value) => {
        setSearchLoading(true);

        setSearchFilter(value);
        const filterProductSearch = dataProduct.filter(app => app.title.toLowerCase().includes(value.toLowerCase()));
        setJsonFile(filterProductSearch);

         setTimeout(() => setSearchLoading(false), 200);
    }
    
    const handleBackHome = () => {
        setSearchFilter('');
        setJsonFile(dataProduct);
    }

    useEffect(() => {
        setTimeout(() => setLoading(false), 500);
    }, []);
    
    if (loading) {
        return (
            <div style={styles.loading}>
                <img style={styles.logoIcon} src={logoIcon} alt="" />
            </div>
        );
    }

    return (
        <div className='my-10 lg:my-20 mx-auto px-5 md:px-10 lg:px-20 flex justify-center'>
            <div className='max-w-[1440px] w-full'>
                <div className='text-center mb-7 lg:mb-10'>
                    <h2 className='font-bold text-[32px] lg:text-[48px] text-center'>Our All Applications</h2>
                    <p className='text-[16px] lg:text-[20px] text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
                <div className='mb-4 flex flex-wrap gap-3 justify-between items-center'>
                    <div>
                        <p className='font-semibold text-[20px] lg:text-[24px]'>({jsonFile.length}) Apps Found</p>
                    </div>
                    <div>
                        <form action="" className=''>
                            <label className='flex items-center gap-2.5 border border-[#D2D2D2] px-4 py-2.5 rounded-[4px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M19.8102 18.9119L14.6466 13.8308C15.9988 12.3616 16.8296 10.4187 16.8296 8.28068C16.8289 3.7071 13.0618 0 8.41447 0C3.76713 0 0 3.7071 0 8.28068C0 12.8543 3.76713 16.5614 8.41447 16.5614C10.4224 16.5614 12.2641 15.8668 13.7107 14.7122L18.8944 19.8134C19.147 20.0622 19.5571 20.0622 19.8096 19.8134C20.0628 19.5646 20.0628 19.1607 19.8102 18.9119ZM8.41447 15.2873C4.48231 15.2873 1.29468 12.1504 1.29468 8.28068C1.29468 4.41101 4.48231 1.27403 8.41447 1.27403C12.3467 1.27403 15.5343 4.41101 15.5343 8.28068C15.5343 12.1504 12.3467 15.2873 8.41447 15.2873Z" fill="#627382"/>
                                </svg>
                                <input className='text-[#627382]' value={searhFilter} type="text" placeholder='search Apps' onChange={(e)=>handleSearch(e.target.value)}/>
                            </label>
                        </form>
                    </div>
                </div>

                {jsonFile.length == 0?
                    (<div>
                        <div className='text-center flex justify-center flex-col items-center'>
                            <img className='mb-8 mt-20 max-w-[300px]' src={appsNoFound} alt="" />
                            <h2 className='font-semibold text-[36px] lg:text-[48px] text-uppercase text-[#001931] text-center'>OPPS!! APP NOT FOUND</h2>
                            <p className='text-[#627382] text-[18px] lg:text-[20px] text-center'>The App you are requesting is not found on our system.  please try another apps</p>
                            <div className='flex items-center justify-center mt-4'>
                                <button className='font-semibold text-[16px] rounded-[4px] bg-linear-[145deg,#632EE3_0%,#9F62F2_100%] px-5 py-3 min-w-[145px] text-[#fff] text-center' onClick={()=>handleBackHome()}>
                                    Go Back!
                                </button>
                            </div>
                        </div>
                    </div>) 
                    :
                    (
                        searchLoading?
                        (
                            <div style={styles.loading}>
                                <img style={styles.logoIcon} src={logoIcon} alt="" />
                            </div>
                        )
                        :

                        (<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                            {jsonFile.map(productItem=> (
                                <Product key={productItem.id} productItem={productItem}></Product>
                            ))}
                        </div>)
                    )
                }
            </div>
        </div>
    );
};

const styles = {
  loading: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  logoIcon: {
    animationName: 'spin',
    animationDuration: '1s', /* Adjust this value to control the speed */
    animationIimingFunction: 'linear',
    animationIterationCount: 'infinite',
    transform: 'translateZ(0)',
    transformOrigin: 'center',
  }

};

export default Apps;