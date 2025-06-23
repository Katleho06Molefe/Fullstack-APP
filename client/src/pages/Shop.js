import React from 'react';
import Layout from '../components/Layout';
import './Shop.css';
import { FaShoppingCart, FaSearch, FaHeart } from 'react-icons/fa';
import door1 from '../assets/door1.jpeg';
import door2 from '../assets/door2.jpeg';
import door3 from '../assets/door3.jpeg';
import door4 from '../assets/door4.jpeg';

const products = [
  { id: 1, image: door1, name: 'Sliding Door 1.5 X 2.1 Brz Budget', category: 'Sliding Doors', price: 'R1999,90' },
  { id: 2, image: door2, name: 'Sliding Door 1.8 X 2.1 Brz Budget', category: 'Doors, Sliding Doors', price: 'R1999,90' },
  { id: 3, image: door3, name: 'Sliding Door 2.1 X 2.1 Brz Budget', category: 'Doors, Sliding Doors', price: 'R2499,90' },
  { id: 4, image: door4, name: 'Sliding Door 2.4 X 2.1 Brz Budget', category: 'Doors, Sliding Doors', price: 'R2799,90' },
];

const Shop = () => {
  return (
    <Layout>
      <div className="shop-page">
        <div className="overlay">
          <h1 className="shop-title">Shop Sliding Doors</h1>
          <div className="product-grid">
            {products.map((product) => (
              <div className="product-card" key={product.id}>
                <div className="image-wrapper">
                  <img src={product.image} alt={product.name} />
                  <div className="hover-icons">
                    <span className="tooltip">Add to cart</span>
                    <FaShoppingCart />
                    <FaSearch />
                    <FaHeart />
                  </div>
                </div>
                <h3>{product.name}</h3>
                <p className="category">{product.category}</p>
                <p className="price">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
