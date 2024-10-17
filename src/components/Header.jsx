// src/components/Header.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Bass Club App
        </Link>
        <button
          className={`navbar-toggler ${navbarOpen ? '' : 'collapsed'}`}
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={navbarOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={`collapse navbar-collapse ${navbarOpen ? 'show' : ''}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/clubs">
                Clubs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/schedule">
                Schedule  
              </Link>
            </li>
            <li className="nav-item">
    <Link className="nav-link" to="/login">
      Login
    </Link>
  </li>
            {/* Add more links as needed */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

