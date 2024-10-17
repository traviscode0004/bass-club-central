// src/pages/HomePage.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="bg-light py-5">
    <div className="container text-center">
      <h1 className="display-4">Welcome to the Bass Club App</h1>
      <p className="lead">Connect with fellow bass fishing enthusiasts!</p>
      <Link to="/clubs" className="btn btn-primary btn-lg">
        Explore Clubs
      </Link>
    </div>
  </div>
);

export default HomePage;

