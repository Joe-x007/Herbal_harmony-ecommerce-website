import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Carousel.module.css'; // Your custom CSS module
import { Link } from 'react-router-dom';
import soap from "../../assets/soap.png";
import church from "../../assets/church.png";
import herb from "../../assets/Herbs.png";
import incense from "../../assets/Incense.png";
import mat from "../../assets/materials.png";
import salts from "../../assets/Salts.png";
import mix from "../../assets/Mixtures.png";
import otc from "../../assets/OTCs.png";
import oils from "../../assets/Oils.png";
import sexProd from "../../assets/SexProducts.png";
import tradi_Afri from "../../assets/TraditionalAfrican.png";
import vaseline from "../../assets/Vaseline.png";
import water from "../../assets/Water.png";
import beads from "../../assets/Beads.png";


const products = [
    { id: 1, name: "Soaps",  imageUrl: soap },
    { id: 2, name: "Church products", imageUrl: church },
    { id: 3, name: "Herbs",  imageUrl: herb },
    { id: 4, name: "Incense", imageUrl: incense },
    { id: 5, name: "Materials",  imageUrl: mat },
    { id: 6, name: "Mixtures",  imageUrl: mix },
    { id: 7, name: "Salts",  imageUrl: salts },
    { id: 8, name: "OTC",  imageUrl: otc },
    { id: 9, name: "Oils",  imageUrl: oils },
    { id: 10, name: "Sex Products", imageUrl: sexProd },
    { id: 11, name: "Traditional African", imageUrl: tradi_Afri },
    { id: 12, name: "Vaseline", imageUrl: vaseline },
    { id: 13, name: "Water", imageUrl: water },
    { id: 14, name: "Beads", imageUrl: beads },

    // ... more products
];

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Adjust based on how many items you want to show at once
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        centerPadding: '50px', // Adjust this to manage spacing

    };

    return (
        <div className={styles.carouselContainer}>
            <h2 className={styles.heading}>Featured Products</h2>
            <Slider {...settings}>
                {products.map(product => (
                    <div key={product.id} className={styles.slide}>
                        <img src={product.imageUrl} alt={product.name} className={styles.image} />
                        <p className={styles.productName}>{product.name}</p>
                    </div>
                ))}
            </Slider>
            <div className={styles.shopNowButtonContainer}>
                <Link to="/products" className={styles.shopNowButton}>Shop Now</Link>
            </div>
        </div>
    );
};

export default Carousel;
