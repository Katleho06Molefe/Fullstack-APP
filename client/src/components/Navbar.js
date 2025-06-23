import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { FaUser, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const hiddenOnPaths = ['/login', '/register', '/Services'];
  const hideShopAndCart = hiddenOnPaths.includes(location.pathname);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Auckland <br /><span>Sliding Doors</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        
        {!hideShopAndCart && <Link to="/shop">Shop</Link>}
        <Link to="/Services">Services</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>

      {!hideShopAndCart && (
        <div className="nav-icons">
          <FaShoppingCart />
          <Link to="/login"><FaUser /></Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

