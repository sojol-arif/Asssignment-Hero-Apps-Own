import React, { useState, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { formatNumber } from "../../Utility/FormatNumber";
import { Link } from 'react-router';
import {addToStoreDb} from '../../Utility/addToLocalStorage';
import { ToastContainer, toast } from 'react-toastify';
import Loader from '../../src/components/Loader/Loader';
import "../../src/App.css"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);


const AppDetails = () => {
    const {idd} = useParams();
    const appId = parseInt(idd);

    const dataApp = useLoaderData();
    
    const singleApp = dataApp.find(singleData =>  singleData.id == appId);

    const {id, title, companyName, image, description,size,reviews,ratingAvg,downloads,ratings} = singleApp;

    const [installName, setInstallName] = useState('Install Now');

    const [installYes, setInstallYes] = useState(true);

    const handleInstall = (id) => {
        addToStoreDb(id);
        setInstallName('Installed');
        setInstallYes(false);

        toast("Wow! Apps installed");
    }


    {/* Get Rating */}
    const ratingArray = singleApp.ratings.map(rating => rating.count);
    const ratingNameArray = singleApp.ratings.map(rating => rating.name);

    {/* Chart Js */}
     const data = {
        labels: ratingNameArray.reverse(),
        datasets: [
            {
                label: "Ratings",
                data: ratingArray.reverse(), // example values
                backgroundColor: "#ff8c00", // orange
                borderRadius: 0,
                barThickness: 32,
            },
        ],
    };

    const options = {
        indexAxis: "y", // 👈 makes it horizontal
        responsive: true,
        plugins: {
        legend: {
            display: false,
        },
        },
        scales: {
        x: {
            beginAtZero: true,
            grid: {
            display: false,
            },
        },
        y: {
            grid: {
            display: false,
            },
        },
        },
    };

    {/* Loading Start */}
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);
    if (loading) {
        return <Loader />;
    }

    return (
        <div className='px-10 lg:px-20 py-10 lg:py-20'>
            <div className='max-w-[1440px] mx-auto'>
                <div className='app_first_section flex flex-wrap gap-9'>
                    <div>
                        <img className='max-w-[316px] w-full max-h-[350px] shadow-[0px_10px_20px_-12px_rgba(0,0,0,0.3)]' src={image} alt="" />
                    </div>
                    <div className='flex-1'>
                        <h2 className='font-bold text-[26px] lg:text-[32px]'>{title}</h2>
                        <p className='text-[16px] lg:text-[20px] text-[#627382]'>Developed by <span className='bg-linear-[125deg,#9F62F2_0%,#632EE3_100%] text-transparent bg-clip-text font-semibold'>{companyName}</span></p>
                        <div className='border-t border-t-[rgba(0,25,49,0.2)] my-7.25'></div>
                        <div className='flex flex-wrap gap-3'>
                            <div className='flex flex-col gap-1 min-w-[150px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M39 33.0625L39 28.5429C39 27.7598 38.3652 27.125 37.5821 27.125H35.6679C34.8848 27.125 34.25 27.7598 34.25 28.5429L34.25 33.0625C34.25 33.7183 33.7183 34.25 33.0625 34.25L6.9375 34.25C6.28166 34.25 5.75 33.7183 5.75 33.0625L5.75 28.5429C5.75 27.7598 5.11517 27.125 4.33207 27.125H2.41794C1.63483 27.125 1 27.7598 1 28.5429L1 33.0625C0.999999 36.3417 3.65831 39 6.9375 39L33.0625 39C36.3417 39 39 36.3417 39 33.0625Z" fill="url(#paint0_linear_3_1115)"/>
                                    <path d="M11.8722 17.642L10.5169 18.9974C9.96313 19.5511 9.96313 20.4489 10.5169 21.0026L18.3195 28.8053C19.2465 29.7333 20.7503 29.7342 21.6783 28.8072C21.6789 28.8066 21.6795 28.8059 21.6802 28.8053L29.4829 21.0026C30.0366 20.4489 30.0366 19.5511 29.4829 18.9974L28.1275 17.642C27.5738 17.0883 26.676 17.0883 26.1222 17.642L22.3749 21.3894L22.3749 2.41794C22.3749 1.63483 21.74 1 20.9569 1L19.0428 1C18.2597 1 17.6249 1.63483 17.6249 2.41793L17.6249 21.3894L13.8775 17.642C13.3238 17.0883 12.426 17.0883 11.8722 17.642Z" fill="url(#paint1_linear_3_1115)"/>
                                    <defs>
                                    <linearGradient id="paint0_linear_3_1115" x1="4.64595" y1="33.0625" x2="36.0473" y2="33.0655" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.0001" stop-color="#54CF68"/>
                                    <stop offset="1" stop-color="#00827A"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_3_1115" x1="12.001" y1="15.2509" x2="28.3599" y2="15.2513" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.0001" stop-color="#54CF68"/>
                                    <stop offset="1" stop-color="#00827A"/>
                                    </linearGradient>
                                    </defs>
                                </svg>
                                <p>Downloads</p>
                                <h3 className='text-[30px] lg:text-[40px] font-extrabold'>
                                    {formatNumber(downloads)}
                                </h3>
                            </div>
                            <div className='flex flex-col gap-1 min-w-[150px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <g clip-path="url(#clip0_3_1122)">
                                    <path d="M39.8957 15.3438C39.6339 14.5339 38.9155 13.9586 38.0655 13.882L26.5205 12.8337L21.9552 2.14829C21.6186 1.36519 20.852 0.858276 20.0002 0.858276C19.1484 0.858276 18.3818 1.36519 18.0452 2.15012L13.48 12.8337L1.93303 13.882C1.08462 13.9604 0.368046 14.5339 0.104673 15.3438C-0.158701 16.1538 0.0845308 17.0422 0.726332 17.6022L9.45306 25.2556L6.87975 36.591C6.69145 37.4245 7.01495 38.286 7.70649 38.7859C8.07821 39.0544 8.51309 39.1912 8.95164 39.1912C9.32976 39.1912 9.70483 39.0892 10.0415 38.8878L20.0002 32.9358L29.9553 38.8878C30.6838 39.3261 31.6021 39.2861 32.2921 38.7859C32.9839 38.2845 33.3071 37.4226 33.1188 36.591L30.5455 25.2556L39.2722 17.6037C39.914 17.0422 40.1591 16.1553 39.8957 15.3438Z" fill="#FF8811"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_3_1122">
                                    <rect width="40" height="40" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                                <p>Average Ratings</p>
                                <h3 className='text-[30px] lg:text-[40px] font-extrabold'>
                                    {formatNumber(ratingAvg)}
                                </h3>
                            </div>
                            <div className='flex flex-col gap-1 min-w-[150px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M26.6392 14.5097C25.9737 14.0262 25.6506 13.2092 25.8052 12.4013L26.4402 9.08344L23.9995 6.7943H3.45852C1.55633 6.7943 0 8.35063 0 10.2528V28.9145C0 30.8167 1.55641 32.373 3.45852 32.373H6.98906V38.8702L12.3438 32.373H26.932C28.8338 32.373 30.3905 30.8165 30.3905 28.9145V13.832L28.9023 14.6513C28.1838 15.0469 27.3027 14.9918 26.6392 14.5097ZM9.56149 26.9994C9.56149 27.4087 9.22664 27.7437 8.81727 27.7437H6.62703C6.21766 27.7437 5.88281 27.4087 5.88281 26.9994V17.9463C5.88281 17.537 6.21766 17.202 6.62703 17.202H8.81727C9.22664 17.202 9.56149 17.537 9.56149 17.9463V26.9994ZM22.764 26.8016C21.4454 28.1203 16.26 28.0287 14.4237 27.6944C13.1958 27.4708 12.5785 27.0856 11.1553 26.9994L11.14 17.7964C15.383 17.1592 16.2308 14.8339 15.8662 10.5059C15.8412 10.209 16.0575 9.94539 16.3537 9.91211C19.9573 9.50711 19.2112 15.3114 18.9886 17.0398H20.5596C24.1349 16.9495 24.2684 17.718 24.4818 19.15C24.6769 20.4591 23.7459 25.7784 22.7641 26.8016H22.764ZM38.678 5.63289L35.5866 8.53227L36.3834 12.695C36.4245 12.9102 36.3428 13.1169 36.1655 13.2457C35.9883 13.3745 35.7665 13.3884 35.5745 13.2827L31.8616 11.2387L28.1488 13.2827C27.9568 13.3884 27.735 13.3745 27.5577 13.2457C27.3805 13.1169 27.2987 12.9102 27.3399 12.695L28.1366 8.53234L25.0452 5.63289C24.8854 5.48297 24.8301 5.26781 24.8978 5.05937C24.9655 4.85094 25.1368 4.70938 25.3543 4.68203L29.5595 4.15344L31.3617 0.317422C31.4549 0.119063 31.6425 0 31.8616 0C32.0808 0 32.2684 0.119063 32.3616 0.317422L34.1638 4.15344L38.3691 4.68203C38.5865 4.70938 38.7577 4.85094 38.8255 5.05937C38.8932 5.26781 38.8379 5.48297 38.678 5.63289H38.678Z" fill="url(#paint0_linear_3_1120)"/>
                                    <defs>
                                    <linearGradient id="paint0_linear_3_1120" x1="2.2076" y1="2.20854" x2="38.864" y2="27.9014" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#632EE3"/>
                                    <stop offset="1" stop-color="#9F62F2"/>
                                    </linearGradient>
                                    </defs>
                                </svg>
                                <p>Total Reviews</p>
                                <h3 className='text-[30px] lg:text-[40px] font-extrabold'>
                                    {formatNumber(reviews)}
                                </h3>
                            </div>
                        </div>
                        <button className='mt-7.25 text-center bg-[#00D390] rounded-[4px] font-semibold text-[16px] lg:text-[20px] text-[#fff] px-5 py-3.5 inline-block shadow-lg' disabled={!installYes}
                        onClick={()=> handleInstall(idd)}> {installName} { installYes? "("+(size) +"MB)" :''} </button>
                    </div>
                </div>
                <div className='border-t border-t-[rgba(0,25,49,0.2)] my-7.25'></div>

                <div style={{ width: "100%", maxWidth: "900px" }}>
                    <h3>Ratings</h3>
                    <Bar data={data} options={options} />
                </div>
                <div className='border-t border-t-[rgba(0,25,49,0.2)] my-7.25'></div>
                <div>
                    <h3 className='text-[20px] lg:text-[24px] font-semibold mb-3'>Description</h3>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;
