import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/login.css';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just dummy validation and redirect to dashboard
    if (email && password) {
      alert('Logged in! Redirecting...');
      navigate('/dashboard');
    } else {
      alert('Please enter email and password!');
    }
  };

  return (
    <div className="login-container">
      <h2>Welcome back! 💰</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label>Email</label>
        <input 
          type="email" 
          placeholder="you@example.com" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />

        <label>Password</label>
        <input 
          type="password" 
          placeholder="Your password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />

        <button type="submit">Log In</button>
      </form>
      <p>
        Don’t have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
}
