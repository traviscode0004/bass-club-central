import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PublicIcon from '@mui/icons-material/Public'; // For globe icon

function Header() {
  return (
    <AppBar position="static" color="transparent" elevation={0} className="header">
      <Toolbar className="header-toolbar">
        {/* Left Logo */}
        <div className="header-logo">
         {/*  <img src="/img/logo.png" alt="Logo" className="logo-img" /> */}
          <Typography variant="h6" color="inherit" className="logo-text">
            Bass Club Central
          </Typography>
        </div>

        {/* Center Nav Links */}
        <div className="header-nav">
          <Typography variant="body1" className="nav-link">Stays</Typography>
          <Typography variant="body1" className="nav-link">Experiences</Typography>
        </div>

        {/* Right Profile Section */}
        <div className="header-right">
          <IconButton>
            <PublicIcon />
          </IconButton>
          <IconButton edge="end">
            <MenuIcon />
          </IconButton>
          <IconButton>
            <Avatar alt="User" src="/img/user.jpg" /> {/* Add user image here */}
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;





