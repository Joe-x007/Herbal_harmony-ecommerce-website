import React from 'react';
import styles from './Introduction.css'
import herbalImage from '../../assets/new_herbal.jpg'; // Correct this path based on your folder structure


const Introduction = () => {


    return (
        <section className="hero" style={{ backgroundImage: `url(${herbalImage})` }}>
            <div className="content">
                <h1>Welcome to Herbal Harmony!</h1>
                <p>
                    {" "}
                    Sole distributor of Bio Herbal Tinchers and Namami.
                </p>
                <a href="/products">Discover</a>
            </div>
        </section>
    );
}

export default Introduction;






