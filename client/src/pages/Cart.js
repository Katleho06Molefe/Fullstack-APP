import React, { useContext } from 'react';
import Layout from '../components/Layout';
import './Cart.css';

const Cart = () => {
  const { cartItems, increaseQty, decreaseQty, removeFromCart } = useContext(CartContext);

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Layout>
      <div className="cart-page">
        <div className="cart-left">
          <table className="cart-table">
            <thead>
              <tr>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>
                    <button onClick={() => removeFromCart(item)} className="remove">&times;</button>
                  </td>
                  <td className="product-info">
                    <img src={item.image} alt={item.name} />
                    <span>{item.name}</span>
                  </td>
                  <td>R{item.price.toFixed(2)}</td>
                  <td className="quantity">
                    <button onClick={() => decreaseQty(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQty(item)}>+</button>
                  </td>
                  <td className="subtotal">R{(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="cart-right">
          <h3>Cart Totals</h3>
          <div className="summary">
            <p>Subtotal: <span>R{subtotal.toFixed(2)}</span></p>
            <p>Shipping: <span className="shipping">Calculate shipping</span></p>
            <p className="total">Total: <span>R{subtotal.toFixed(2)}</span></p>
            <button className="checkout-btn">PROCEED TO CHECKOUT</button>
            <button className="download-btn">DOWNLOAD CART AS PDF</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
