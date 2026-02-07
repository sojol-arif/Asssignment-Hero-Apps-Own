import React from 'react';
import { useState } from 'react';
import Banner from '../../src/components/Banner/Banner';
import Trusted from '../../src/components/Trusted/Trusted';
import TrendingApps from '../../Pages/TrendingApps/TrendingApps';
import { useEffect } from 'react';
import logoIcon from "../../src/assets/logo-icon.png"
import "../../src/App.css"

const Home = () => {
    const [loading, setLoading] = useState(true);

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
        <div>
            <Banner></Banner>
            <Trusted></Trusted>
            <TrendingApps></TrendingApps>
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

export default Home;