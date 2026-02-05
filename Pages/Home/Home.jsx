import React from 'react';
import Banner from '../../src/components/Banner/Banner';
import Trusted from '../../src/components/Trusted/Trusted';
import TrendingApps from '../../Pages/TrendingApps/TrendingApps';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Trusted></Trusted>
            <TrendingApps></TrendingApps>
        </div>
    );
};

export default Home;