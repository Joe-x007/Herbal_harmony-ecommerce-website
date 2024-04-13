// src/BlogSection.js
import React from 'react';
import BlogPost from './BlogPost';
import pop from "../../assets/popular.png"
import well from "../../assets/wellness.png"
import trad from "../../assets/traditional.png"

const BlogSection = () => {
    const blogPosts = [
        {
            title: 'The Power of Natural Herbs',
            summary: 'Explore the benefits of using natural herbs in your daily life.',
            imageUrl: pop,
            link: 'https://www.healthline.com/nutrition/herbal-medicine'
        },
        {
            title: 'Herbal Remedies for Wellness ',
            summary: 'Discover the natural ways to stay healthy and vibrant.',
            imageUrl: well,
            link: 'https://www.healthline.com/health/herbal-medicine-101-harness-the-power-of-healing-herbs'
        },
        {
            title: 'Importance of traditional medicine',
            summary: 'Learn the role traditional medicine offers and the benefit it holds.',
            imageUrl: trad,
            link: 'https://en.wikipedia.org/wiki/Traditional_African_medicine'
        },
    ];

    return (
        <div style={styles.blogSection}>
            <h2 style={styles.heading}>Latest Blogs</h2>
            <div style={styles.blogContainer}>
                {blogPosts.map((post, index) => (
                    <BlogPost key={index} {...post} />
                ))}
            </div>
        </div>
    );
};

const styles = {
    blogSection: {
        textAlign: 'center',
        padding: '60px', // Increased padding
        backgroundColor: '#ffe5e5',
        color: '#333',
    },
    heading: {
        color: '#000',
        marginBottom: '40px', // Increased space below the heading
        fontSize: '2em', // Larger font size for the heading
    },
    blogContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
};

export default BlogSection;
