import React from 'react';
import './About_us_page.css';


const About_us_page = () => {
    return (

        <div className="about-us-container">
            <div className="about-us-header">
                <h1>About Us</h1>
            </div>
            <section className="vision-section">
                <h2>Our Vision</h2>
                <p>Our vision at Ranis is to provide a range of products that cover a spectrum of holistic healthcare for humans and animals; to promote both preventive and curative solutions throughout Africa and abroad.</p>
            </section>

            <section className="mission-section">
                <h2>Our Mission</h2>
                <p>At Ranis Herbalist we are dedicated to supply exceptional healthcare products at an affordable price to our customer base.</p>
                <p>We envisage an exponential growth as we expand our customer base in the African market with a strategy linked to social development in the target communities where we operate. The social uplift includes health awareness programmes, establishment of employment opportunities and creation of distribution channels.</p>
                <p>We are committed to pursue our business and social objectives in a manner that is always ethical, honest and in accordance with standard business and commercial practices.</p>
            </section>

            <section className="overview-section">
                <h2>Overview</h2>
                <p>Our primary purpose at Ranis Herbalist is to develop our manufacturing enterprise to incorporate pharmaceutical, cosmetic and traditional African products.</p>
                <br />
                <p>Our strategy is tailed with current trends in the healthcare industry. We believe in a holistic approach to health and wellbeing as well as a primary healthcare strategy that emphasizes a preventive approach, alternative medicine and education.</p>
                <p>We believe that our products have enormous potential for growth. An example would be the 7-2-7 product range, a multivitamin scientifically designed and manufactured to provide nutritional support to chronically ill patients. It is a food supplement and an adjuvant to the patient management in various therapies. With the enormous challenge facing the people of sub-Saharan Africa from the HIV/AIDS scourge, every resource should be brought in the fight against this pandemic in order to bear and restrict its spread and take good care of those already afflicted.</p>
            </section>
        </div>
    );
};

export default About_us_page;
