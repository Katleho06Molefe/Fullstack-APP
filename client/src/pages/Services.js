import React from 'react';
import Layout from '../components/Layout'; 
import './Services.css';

const Services = () => {
  return (
    <Layout>
      <div className="services-page">
        <div className="overlay">
          <div className="services-container">
            <h1>Our Services</h1>
            <p className="intro">
              At Auckland Doors, we offer a wide range of high-quality sliding door solutions
              to enhance the look and functionality of your home.
            </p>

            <div className="service-section">
              <h2>1. Custom Door Design</h2>
              <ul>
                <li>Tailored designs to fit your unique style and preferences</li>
                <li>Expert consultation to ensure perfect fit and functionality</li>
              </ul>
            </div>

            <div className="service-section">
              <h2>2. Door Installation</h2>
              <ul>
                <li>Professional installation services for all types of sliding doors</li>
                <li>Ensuring precise fit and finish for optimal performance</li>
              </ul>
            </div>

            <div className="service-section">
              <h2>3. Door Repair and Maintenance</h2>
              <ul>
                <li>Expert repair services to fix damaged or worn-out doors</li>
                <li>Regular maintenance to extend the lifespan of your doors</li>
              </ul>
            </div>

            <div className="service-section">
              <h2>4. Door Selection</h2>
              <ul>
                <li>Wide range of sliding door styles and materials to choose from</li>
                <li>Expert guidance to help you select the perfect doors for your home</li>
              </ul>
            </div>

            <div className="benefits-section">
              <h2>Benefits</h2>
              <ul>
                <li>Enhance your home's curb appeal</li>
                <li>Improve energy efficiency and reduce costs</li>
                <li>Increase security and protection for your family</li>
              </ul>
            </div>

            <div className="contact-section">
              <h2>Contact Us</h2>
              <p>
                Get in touch with us today to learn more about our services and how we can help
                you achieve your sliding door goals!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
