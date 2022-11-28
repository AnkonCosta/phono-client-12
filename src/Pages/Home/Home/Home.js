import React from 'react';
import UseTitle from '../../../Hooks/useTitle';
import Advertise from '../Advertise/Advertise';
import CategoryCard from '../CategoryCard/CategoryCard';
import Testimonial from '../CategoryCard/Testimonial/Testimonial';
import HomeBanner from '../HomeBanner/HomeBanner';

const Home = () => {
    UseTitle('Home')
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