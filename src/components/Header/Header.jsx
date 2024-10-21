import React, { useContext } from 'react';
// mui components
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
// local components
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
// context
import { UserContext } from '../../context/UserContext';

function Header() {
  const { user, groups } = useContext(UserContext);  // Access both user and groups
  console.log("🚀 ~ Header ~ groups:", groups);

  return (
    <AppBar
      position='static'
      color='transparent'
      elevation={0}
      className='header'
    >
      <Toolbar className='header-toolbar'>
        {/* Left Logo */}
        <div className='header-logo'>
          <Typography variant='h6' color='inherit' className='logo-text'>
            Bass Club Central
          </Typography>
        </div>

        {/* Center Nav Links */}
        <Navigation />

        {/* Right Profile Section */}
        <div className='header-right'>
          <IconButton component={Link} to="/">
            <HomeIcon />
          </IconButton>
          
          {/* Show admin link if user is in Admin group */}
          {groups.includes('Admin') && (
            <IconButton component={Link} to="/admin">
              <Typography variant="body1">Admin</Typography>
            </IconButton>
          )}

          <IconButton edge='end'>
            <MenuIcon />
          </IconButton>
          
          <IconButton>
            <Avatar alt='User' src='/img/user.jpg' />{' '}
            {/* Add user image here */}
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
