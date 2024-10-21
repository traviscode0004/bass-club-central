// src/App.js
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import ClubsPage from './pages/ClubsPage.jsx';
import SchedulePage from './pages/SchedulePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import AdminPage from './pages/AdminPage.jsx';  // Admin page component
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';
import UserContextProvider, { UserContext } from './context/UserContext.js';  // Import the provider
import { LakesProvider } from './context/LakeContext.js';

Amplify.configure(awsconfig);

// Component to protect admin routes
const ProtectedAdminRoute = ({ element }) => {
  const { user, groups, loading } = useContext(UserContext);

  if (loading) return <div>Loading...</div>;

  // If user is not in the Admin group, redirect to home
  if (!groups.includes('Admin')) {
    return <Navigate to="/" />;
  }

  // If user is in Admin group, render the passed component
  return element;
};

const App = () => (
  <Authenticator>
    <UserContextProvider>
    <LakesProvider>
      <Router>
        <Header />
        <main className="py-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/clubs" element={<ClubsPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/login" element={<LoginPage />} />
            {/* Protect the admin route */}
            <Route 
              path="/admin" 
              element={<ProtectedAdminRoute element={<AdminPage />} />} 
            />
          </Routes>
        </main>
        <Footer />
      </Router>
      </LakesProvider>
    </UserContextProvider>
  </Authenticator>
);

export default App;
