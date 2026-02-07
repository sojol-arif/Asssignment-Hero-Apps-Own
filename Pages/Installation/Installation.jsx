import React, { useState } from 'react';
import {getStoreReadBook} from '../../Utility/addToLocalStorage';
import { useLoaderData } from 'react-router';
import { useEffect } from 'react';
import ProductInstall from '../ProductInstall/ProductInstall';
import logoIcon from "../../src/assets/logo-icon.png"
  import { ToastContainer, toast } from 'react-toastify';
import "../../src/App.css"

const Installation = () => {
    const [loading, setLoading] = useState(true);

    const dataApps = useLoaderData();

    const installId = getStoreReadBook();
    
    const appListparseInt = installId.map(id => parseInt(id));
    const appInstallTotal = dataApps.filter(app => appListparseInt.includes(app.id));

    const [uninstall, setUninstall] = useState(appInstallTotal);
    const [sort, setSort] = useState([]);

    const handleSort = (type) => {
        setSort(type);

        if(type == 'High to Low'){
            const sortList = [...uninstall].sort((a,b)=> b.downloads - a.downloads );
            setUninstall(sortList);
        }
        
        if(type == 'Low to High'){
            const sortList2 = [...uninstall].sort((a,b)=> a.downloads -b.downloads );
            setUninstall(sortList2);
        }
    }

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);
    
    if (loading) {
        return (
            <div style={styles.loading}>
                <img style={styles.logoIcon} src={logoIcon} alt="" />
            </div>
        );
    }

    return (
        <div className='my-10 lg:my-20 mx-auto mx-10 lg:mx-20 flex justify-center'>
            <div className='max-w-[1440px] w-full'>
                <div className='text-center mb-7 lg:mb-10'>
                    <h2 className='font-bold text-[32px] lg:text-[48px]'>Our All Applications</h2>
                    <p className='text-[16px] lg:text-[20px]'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
                
                <div className='mb-3 flex flex-wrap justify-between'>
                    <div className='font-semibold text-[20px] lg:text-[24px]'> {uninstall.length} App Found</div>
                    <details className="dropdown dropdown-end">
                        <summary className="btn m-1">Sort by: {sort?sort: ""}</summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a onClick={()=>handleSort("High to Low")}>High to Low</a></li>
                            <li><a onClick={()=>handleSort("Low to High")}>Low to High</a></li>
                        </ul>
                    </details>  
                </div>
                <div className='grid grid-cols-1  gap-3'>
                    {uninstall.map(productItem=> (
                        <ProductInstall key={productItem.id} productItem={productItem} uninstall={uninstall} setUninstall={setUninstall}></ProductInstall>
                    ))}
                </div>
            </div>
            <ToastContainer />
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

export default Installation;