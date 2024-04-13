// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Make sure to create a corresponding CSS file
import logo from "../../assets/comp_logo.jpeg"

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-section logo-section">
                {/* Insert your logo here */}
                <img src= {logo} alt="Company Logo" className="footer-logo" />
            </div>
            <div className="footer-section information-section">
                <h4>INFORMATION</h4>
                <a href="/sitemap">Sitemap</a>
                <a href="/privacy">Privacy Policy</a>
                <a href="/terms">Terms of Service</a>
                <a href="/contact">Contact Us</a>
            </div>
            <div className="footer-section account-section">
                <h4>MY ACCOUNT</h4>
                <a href="/account">My Account</a>
                <a href="/orders">Orders</a>
                <a href="/wishlist">Wishlist</a>
            </div>
            <div className="footer-section follow-section">
                <h4>FOLLOW US</h4>
                <a href="https://facebook.com">Facebook</a>
                <a href="https://twitter.com">Twitter</a>
                <a href="https://youtube.com">Youtube</a>
                <a href="https://instagram.com">Instagram</a>
            </div>
            <p>© 2024 Your Herbalist Shop. All rights reserved.</p>
        </footer>
    );
};

export default Footer;






