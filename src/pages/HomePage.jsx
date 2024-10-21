import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import SearchPage from './SearchPage';
import HeroSection from '../components/HeroSection/HeroSection';
import SearchBar from '../components/SearchBar/SearchBar';
import IconBar from '../components/IconBar/IconBar';
import TournamentsList from '../components/TournamentList/TournamentList';
import LakesList from '../components/LakeList/LakeList';

const HomePage = () => (
  <Box sx={{ bgcolor: 'white', py: 5, boxShadow: 3 }}>
    <SearchBar />
    <IconBar />
    <LakesList />
  </Box>
);

export default HomePage;



