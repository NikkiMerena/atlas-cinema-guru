// src/routes/auth/Login.js
import React from 'react';
import './auth.css';

function Login({ username, password, setUsername, setPassword }) {
  return (
    <form>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Log In</button>
    </form>
  );
}

export default Login;
