import React from 'react';
import {formatNumber} from "../../Utility/FormatNumber";
import {getStoreReadBook} from '../../Utility/addToLocalStorage';

const ProductInstall = ({productItem, setUninstall, uninstall}) => {
    
    const handleUninstall = (id) => {
        const newFilterRemove = uninstall.filter(app => app.id != id);
        setUninstall(newFilterRemove);

        const dataLocalStorage = getStoreReadBook();
        const newLocalStorageData = dataLocalStorage.filter(appId => appId != parseInt(id) );

        // Local Storage Start
        const data = JSON.stringify(newLocalStorageData);
        
        localStorage.setItem("readList", data);

    }

    return (
        <div className='rounded-[4px] bg-[#fff] shadow-[0_10px_20px_-12px_rgba(0,0,0,0.10)] p-4'>
            <div className='flex flex-wrap justify-between items-center'>
                <div className='flex flex-wrap gap-4 items-center'>
                    <div className='rounded-[8px] overflow-hidden w-[80px]'>
                        <img className='max-h-[80px] max-w-[80px] w-full h-[80px] object-cover' src={productItem.image} alt="" />
                    </div>
                    <div>
                        <h3 className='font-medium text-[16px] lg:text-[20px] my-[16px] mt-0 mb-2'>{productItem.title}</h3>
                        <div className='flex flex-wrap gap-3'>
                            <p className='inline-flex gap-1 items-center text-[#00D390] font-medium'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.96751 10.5599C3.32097 10.5599 3.60751 10.8465 3.60751 11.1999V12.4799C3.60751 12.6497 3.67493 12.8124 3.79498 12.9325C3.91499 13.0525 4.07777 13.1199 4.24751 13.1199H11.9275C12.0972 13.1199 12.26 13.0525 12.38 12.9325C12.5001 12.8124 12.5675 12.6497 12.5675 12.4799V11.1999C12.5675 10.8465 12.854 10.5599 13.2075 10.5599C13.561 10.5599 13.8475 10.8465 13.8475 11.1999V12.4799C13.8475 12.9891 13.6453 13.4775 13.2851 13.8376C12.9251 14.1976 12.4367 14.3999 11.9275 14.3999H4.24751C3.73831 14.3999 3.24993 14.1977 2.88986 13.8376C2.52981 13.4775 2.32751 12.9891 2.32751 12.4799V11.1999C2.32751 10.8465 2.61405 10.5599 2.96751 10.5599Z" fill="#00D390"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.43501 6.90743C4.68495 6.65749 5.09017 6.65749 5.34011 6.90743L8.08755 9.65488L10.835 6.90743C11.0849 6.65749 11.4902 6.65749 11.7401 6.90743C11.9901 7.15735 11.9901 7.56259 11.7401 7.81251L8.54009 11.0125C8.29017 11.2624 7.88492 11.2624 7.635 11.0125L4.43501 7.81251C4.18508 7.56259 4.18508 7.15735 4.43501 6.90743Z" fill="#00D390"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.08751 2.23999C8.44098 2.23999 8.72751 2.52653 8.72751 2.87999V10.56C8.72751 10.9135 8.44098 11.2 8.08751 11.2C7.73404 11.2 7.44751 10.9135 7.44751 10.56V2.87999C7.44751 2.52653 7.73404 2.23999 8.08751 2.23999Z" fill="#00D390"/>
                                </svg>
                                {formatNumber(productItem.downloads)}
                            </p>
                            <p className='inline-flex gap-1 items-center text-[16px] text-[#FF8811] font-medium'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <g clip-path="url(#clip0_290_24)">
                                    <path d="M15.9583 6.13748C15.8536 5.81349 15.5662 5.58339 15.2262 5.55275L10.6082 5.13342L8.78208 0.859266C8.64744 0.546026 8.34079 0.343262 8.00008 0.343262C7.65938 0.343262 7.35273 0.546026 7.21808 0.859999L5.39198 5.13342L0.773211 5.55275C0.433847 5.58412 0.147219 5.81349 0.0418692 6.13748C-0.0634802 6.46146 0.0338123 6.81682 0.290533 7.04082L3.78122 10.1022L2.7519 14.6364C2.67658 14.9697 2.80598 15.3143 3.0826 15.5143C3.23128 15.6217 3.40524 15.6764 3.58066 15.6764C3.73191 15.6764 3.88193 15.6356 4.01658 15.5551L8.00008 13.1743L11.9821 15.5551C12.2735 15.7304 12.6408 15.7144 12.9168 15.5143C13.1936 15.3137 13.3229 14.969 13.2475 14.6364L12.2182 10.1022L15.7089 7.04143C15.9656 6.81682 16.0636 6.46207 15.9583 6.13748Z" fill="#FF8811"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_290_24">
                                    <rect width="16" height="16" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                                {productItem.ratingAvg}
                            </p>
                            <p className='text-[16px] text-[#627382]'>
                                {productItem.size} MB
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                     <button className='text-center bg-[#00D390] rounded-[4px] font-semibold text-[16px] text-[#fff] px-4 py-3 inline-block' onClick={()=> handleUninstall(productItem.id)}> Uninstall </button>
                </div>
            </div>
        </div>
    );
};

export default ProductInstall;