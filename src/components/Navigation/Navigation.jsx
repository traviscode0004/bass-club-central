import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, Button, Box } from '@mui/material';
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
    <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 'auto' }}>
          <Button component={Link} to="/" className={styles.white}>
            Home
          </Button>
          <Button
            className={styles.white}
            aria-controls="tournaments-menu"
            aria-haspopup="true"
            onClick={handleTournamentsMenuToggle}
          >
            Tournaments
          </Button>
          <Menu
            id="tournaments-menu"
            anchorEl={tournamentsAnchorEl}
            open={Boolean(tournamentsAnchorEl)}
            onClose={handleClose}
          >
            <MenuItem component={Link} to="/upcoming-tournaments" onClick={handleClose}>
              Upcoming Tournaments
            </MenuItem>
            <MenuItem component={Link} to="/past-tournaments" onClick={handleClose}>
              Past Tournaments
            </MenuItem>
          </Menu>
          <Button component={Link} to="/clubs" className={styles.white}>
            Clubs
          </Button>
          <Button component={Link} to="/schedule" className={styles.white}>
            Schedule
          </Button>
          <Button component={Link} to="/login" className={styles.white}>
            Login
          </Button>
        </Box>
  );
}

export default Navigation;



