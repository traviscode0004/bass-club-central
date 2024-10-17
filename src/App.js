// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// styles
import 'bootstrap/dist/css/bootstrap.min.css';
// import './CustomStyles.css';
// components
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx'
// pages;
import HomePage from './pages/HomePage.jsx';
import ClubsPage from './pages/ClubsPage.jsx';
import SchedulePage from './pages/SchedulePage.jsx';
import LoginPage from './pages/LoginPage.jsx';

const App = () => (
  <Router>
    <Header />
    <main className="py-4">
    <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/clubs" element={<ClubsPage />} />
  <Route path="/schedule" element={<SchedulePage />} />
  <Route path="/login" element={<LoginPage />} />
</Routes>
    </main>
    <Footer />
  </Router>
);

export default App;


