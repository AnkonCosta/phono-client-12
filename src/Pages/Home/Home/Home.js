import React from 'react';
import Advertise from '../Advertise/Advertise';
import CategoryCard from '../CategoryCard/CategoryCard';
import Testimonial from '../CategoryCard/Testimonial/Testimonial';
import HomeBanner from '../HomeBanner/HomeBanner';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Advertise></Advertise>
            <CategoryCard></CategoryCard>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;