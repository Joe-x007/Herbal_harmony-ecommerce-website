// src/components/AboutUs.js
import React from 'react';


const AboutUs = () => {
    const sectionStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: '20px',
        padding: '50px',
        backgroundColor: 'rgba(247,247,247,0.82)',
        borderRadius: '10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    };

    const contentStyle = {
        marginLeft: '0px',
        padding: '0 20px',
    };

    const headingStyle = {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: '#282c34',
        marginBottom: '20px',
    };

    const descriptionStyle = {
        fontSize: '1.2rem',
        color: '#282c34',
        marginBottom: '20px',
        lineHeight: '1.6',
    };



    return (
        <div style={sectionStyle}>
            <div style={contentStyle}>
                <h2 style={headingStyle}>About Us</h2>
                <p style={descriptionStyle}>
                    Welcome to our herbal shop! We offer a wide range of traditional African products, each carefully crafted to bring you the best of African herbs and remedies. Our mission is to provide you with high-quality, natural products that have been used for generations to promote health and well-being. Explore our collection and discover the rich traditions of African herbal medicine.
                </p>
                <a href="/about" className="btn-about-us">Learn More</a>
            </div>
        </div>
    );
};


export default AboutUs;
