// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';  // Keep your original header
import Footer from './components/Footer/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import ClubsPage from './pages/ClubsPage.jsx';
import SchedulePage from './pages/SchedulePage.jsx';
import LoginPage from './pages/LoginPage.jsx';



const App = () => (
  <Router>
    {/* Keep your original header */}
    <Header />
    
    {/* Airbnb-like content for the HomePage */}
    <main className="py-4">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/clubs" element={<ClubsPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </main>
    
    {/* Additional components like SearchBar and IconBar can be used in HomePage */}
    
    
    {/* Footer */}
    <Footer />
  </Router>
);

export default App;



