import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const eventDate = new Date('2024-10-26'); // Set your event date
  const today = new Date();
  const timeDifference = eventDate.getTime() - today.getTime();
  const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return (
    <Box
      sx={{
        bgcolor: 'white',
        color: 'primary.main',
        py: 8,
        textAlign: 'center',
        boxShadow: 3,
      }}
    >
      <Typography variant="h3" component="h1" sx={{ mb: 2, textShadow: '2px 2px 5px rgba(0,0,0,0.1)' }}>
        Upcoming Tournament: Lake of the Ozarks
      </Typography>
      <Typography variant="h4" sx={{ mb: 4 }}>
        October 26, 2024
      </Typography>
      <Typography variant="h5" color="textSecondary" sx={{ mb: 4 }}>
        {daysLeft} days until the tournament begins!
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/register">
        Register Now
      </Button>
    </Box>
  );
};

export default HeroSection;
