// Footer Component

import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => (
  <Box
    component="footer"
    sx={{
      bgcolor: 'white',
      py: 3,
      boxShadow: 3,
      textAlign: 'center',
      mt: 'auto',
      position: 'relative',
      width: '100%',
    }}
  >
    <Container>
      <Typography variant="body2" color="text.secondary">
        &copy; {new Date().getFullYear()} Bass Club Central
      </Typography>
    </Container>
  </Box>
);

export default Footer;




