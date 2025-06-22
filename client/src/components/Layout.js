import React from 'react';
import Navbar from './Navbar';
import './Layout.css';
import bgImage from '../assets/background.jpeg';

const Layout = ({ children }) => {
  return (
    <div className="layout" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="overlay">
        <Navbar />
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
