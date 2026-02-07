import React from 'react';
import { useState } from 'react';
import Banner from '../../src/components/Banner/Banner';
import Trusted from '../../src/components/Trusted/Trusted';
import TrendingApps from '../../Pages/TrendingApps/TrendingApps';
import { useEffect } from 'react';
import Loader from '../../src/components/Loader/Loader';
import "../../src/App.css"

const Home = () => {
    
    {/* Loading Start */}
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);
    if (loading) {
        return <Loader />;
    }

    return (
        <div>
            <Banner></Banner>
            <Trusted></Trusted>
            <TrendingApps></TrendingApps>
        </div>
    );
};


export default Home;