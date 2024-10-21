import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, Button, Box, Typography } from '@mui/material';
import styles from './Navigation.module.scss';

function Navigation() {

  const [anchorEl, setAnchorEl] = useState(null);
  const [tournamentsAnchorEl, setTournamentsAnchorEl] = useState(null);

  const handleToggle = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleTournamentsMenuToggle = (event) => {
    setTournamentsAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setTournamentsAnchorEl(null);
  };
  return (
    <div className='header-nav'>
    <Link to='/' underline='none'>
      <Typography variant='body1' className='nav-link'>
        Home
      </Typography>
    </Link>
    <Link to="/clubs" underline='none'>
      <Typography variant='body1' className='nav-link'>
      Clubs
      </Typography>
    </Link>
    <Link to="/schedule" underline='none'>
      <Typography variant='body1' className='nav-link'>
      Schedule
      </Typography>
    </Link>
    <Link to="/login" underline='none'>
      <Typography variant='body1' className='nav-link'>
      Login
      </Typography>
    </Link>
  </div>
  );
}

export default Navigation;



