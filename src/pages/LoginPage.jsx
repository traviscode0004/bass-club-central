// src/pages/LoginPage.jsx

import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // Handle login logic here

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement login logic
  };

  return (
    <div className="container">
      <h2 className="my-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="inputUsername" className="form-label">
            Username or Email
          </label>
          <input
            type="text"
            className="form-control"
            id="inputUsername"
            placeholder="Enter username or email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
