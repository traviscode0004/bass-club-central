import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { signIn } from '@aws-amplify/auth'; // Import the signIn function
import { useNavigate } from 'react-router-dom'; // Optional for navigation after login

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Optional for redirect after successful login

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await signIn(username, password); // Call signIn directly
      console.log('Login success:', user);
      // Redirect to another page, e.g., navigate('/dashboard');
      navigate('/dashboard'); // Optional: Adjust this path as needed
    } catch (error) {
      console.error('Login failed:', error);
      setError('Login failed. Please check your username and password.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box mb={3}>
            <TextField
              fullWidth
              id="inputUsername"
              label="Username or Email"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Box>
          <Box mb={3}>
            <TextField
              fullWidth
              id="inputPassword"
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Box>
          {error && (
            <Typography color="error" variant="body2" gutterBottom>
              {error}
            </Typography>
          )}
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default LoginPage;
