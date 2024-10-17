// src/components/Navigation.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/clubs">Clubs</Link></li>
        <li><Link to="/schedule">Schedule</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
