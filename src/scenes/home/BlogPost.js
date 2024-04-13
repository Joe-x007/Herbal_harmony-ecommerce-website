// src/BlogPost.js
import React from 'react';

const BlogPost = ({ title, summary, imageUrl, link }) => {
    return (
        <div
            style={styles.blogPost}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
            <img src={imageUrl} alt={title} style={styles.image} />
            <h3 style={styles.title}>{title}</h3>
            <p style={styles.summary}>{summary}</p>
            <a href={link} style={styles.readMore} target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
    );
};

const styles = {
    blogPost: {
        backgroundColor: '#fff',
        margin: '20px',
        padding: '30px',
        border: '1px solid #ddd',
        boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.3)',
        width: '350px', // Increased width
        borderTop: '5px solid #d10000',
        borderRadius: '10px',
        transition: 'transform 0.3s ease',


    },
    image: {
        width: '100%',
        height: 'auto',
        borderRadius: '5px 5px 0 0',
    },
    title: {
        color: '#d10000',
        fontSize: '1.2em', // Slightly larger font size for title
    },
    summary: {
        color: '#333',
        fontSize: '1em', // Adjust font size if needed
    },
    readMore: {
        textDecoration: 'none',
        color: '#d10000',
        fontWeight: 'bold',
        marginTop: '15px', // Add some space above the read more link
        display: 'inline-block',
    },
};

export default BlogPost;
