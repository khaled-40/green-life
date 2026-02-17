import React from 'react';
import Hero from '../Component/Hero';
import TopRatedPlants from '../Component/TopRatedPlants';
import PlantCareTips from '../Component/PlantCareTips';
import GreenExperts from '../Component/GreenExperts';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <TopRatedPlants></TopRatedPlants>
            <PlantCareTips></PlantCareTips>
            <GreenExperts></GreenExperts>
        </div>
    );
};

export default Home;