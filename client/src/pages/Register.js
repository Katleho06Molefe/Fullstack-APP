import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    cellphone: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) newErrors[key] = 'This field is required';
    });
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log('Form submitted:', formData);
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit} noValidate>
        {['firstName', 'lastName', 'email', 'password', 'confirmPassword', 'cellphone'].map((field) => (
          <div key={field} style={{ marginBottom: '1rem' }}>
            <label>
              {field.replace(/([A-Z])/g, ' $1')}:
              <input
                type={field.includes('password') ? 'password' : field === 'email' ? 'email' : 'text'}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
                style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
              />
            </label>
            {errors[field] && (
              <div style={{ color: 'red', fontSize: '0.9rem' }}>{errors[field]}</div>
            )}
          </div>
        ))}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
