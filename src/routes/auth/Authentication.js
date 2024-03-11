// src/routes/auth/Authentication.js
import React, { useState } from 'react';
import './auth.css';
import Login from './Login';
import Register from './Register';

function Authentication({ setIsLoggedIn, setUserUsername }) {
  const [_switch, setSwitch] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <button onClick={() => setSwitch(true)}>Sign In</button>
      <button onClick={() => setSwitch(false)}>Sign Up</button>
      {_switch
        ? <Login username={username} password={password} setUsername={setUsername} setPassword={setPassword} />
        : <Register username={username} password={password} setUsername={setUsername} setPassword={setPassword} />}
    </div>
  );
}

export default Authentication;
