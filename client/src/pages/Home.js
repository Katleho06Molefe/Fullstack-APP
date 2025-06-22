// client/src/pages/Home.js
import React from 'react';
import './Home.css';
import bgImage from '../assets/WhatsApp Image 2025-06-22 at 00.00.03.webp';

const Home = () => {
  return (
    <div className="home-page" style={{ backgroundImage: `url(${bgImage})` }}>
      <header className="home-header">
        <div className="nav-left">
          <span>Home</span>
        </div>
        <div className="logo-section">
          <p className="about-text">About</p>
          <h1 className="logo-text">🅰️uckland <span className="subtext">Doors</span></h1>
          <p className="login-text">Login</p>
        </div>
        <p className="tagline">Auckland Doorices</p>
      </header>
    </div>
  );
};

export default Home;
