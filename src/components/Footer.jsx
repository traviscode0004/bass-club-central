// src/components/Footer.jsx

import React from 'react';

const Footer = () => (
  <footer className="bg-dark text-white mt-5 p-4 text-center">
    <div className="container">
      <p>&copy; {new Date().getFullYear()} Bass Club App</p>
    </div>
  </footer>
);

export default Footer;


