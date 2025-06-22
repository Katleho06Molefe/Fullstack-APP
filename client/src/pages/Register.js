import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout'; 
import './Register.css'; 

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    cellphone: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    if (formData.password !== formData.confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', formData);
      setMessage('Registration successful!');
    } catch (err) {
      setMessage('Registration failed: ' + (err.response?.data?.msg || err.message));
    }
  };

  return (
    <Layout>
      <div className="register-form-container">
        <form className="register-form" onSubmit={handleSubmit}>
          <h2>Register</h2>
          {message && <p className="message">{message}</p>}

          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email (Username)"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="cellphone"
            placeholder="Cellphone Number"
            value={formData.cellphone}
            onChange={handleChange}
            required
          />

          <button type="submit">Register</button>
        </form>
      </div>
    </Layout>
  );
}

export default Register;
