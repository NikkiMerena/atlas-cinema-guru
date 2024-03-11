// src/routes/auth/Register.js
import React from 'react';
import './auth.css';

function Register({ username, password, setUsername, setPassword }) {
  return (
    <form>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Register;
