import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import bgImage from '../assets/background.jpeg';
import { FaUser, FaShoppingCart, FaSearch } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="home-page" style={{ backgroundImage: `url(${bgImage})` }}>
      <header className="navbar">
        <div className="logo">
          <Link to="/">Auckland <br></br> <span>Sliding Doors</span></Link>
        </div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Services">Services</Link></li>
          <li><Link to="/Login">Login</Link></li>
          <li><Link to="/Register">Register</Link></li>
        </ul>

        <div className="nav-icons">
        
          <Link to="/login"><FaUser /></Link>

        </div>
      </header>

      <div className="home-content">
        <h1 className="tagline">Welcome to Auckland Sliding Doors</h1>
      </div>
    </div>
  );
};

export default Home;
