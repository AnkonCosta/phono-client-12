import React from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';
import HomeBanner from '../HomeBanner/HomeBanner';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <CategoryCard></CategoryCard>
        </div>
    );
};

export default Home;