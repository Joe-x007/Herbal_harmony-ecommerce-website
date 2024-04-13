// src/components/HomePage.js
import React from 'react';
import Introduction from './Introduction';
import AboutUs from './AboutUs';

import FeaturedProductsCarousel from './Carousel'; // Import the carousel component
import BlogSection from './BlogSection';

const Home = () => {
    return (
        <div>
            <Introduction />
            <FeaturedProductsCarousel />
            <AboutUs />
        </div>
    );
}

export default Home;
