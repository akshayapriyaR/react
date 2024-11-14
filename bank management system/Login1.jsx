import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, TextField, Typography, Paper } from '@mui/material';

const Login1 = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Fetch user data from your backend API
      const response = await axios.get("http://localhost:3000/users");
      const users = response.data;

      // Check if the user exists in the database
      const existingUser = users.find(user => user.username === username && user.password === password);

      if (existingUser) {
        // If the user exists, navigate to the home page
        alert('Login successful!');
        navigate('/home');
      } else {
        // If user does not exist, inform the user
        alert('Invalid username or password. Please try again.');
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      alert('An error occurred while logging in. Please try again later.');
    }
  };

  return (
    <Paper style={{ padding: '2rem', maxWidth: '400px', margin: '2rem auto', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}>
      <Typography variant="h4" align="center" style={{ marginBottom: '1.5rem', color: '#1976d2' }}>Login</Typography>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{ marginBottom: '1rem' }}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ marginBottom: '1rem' }}
        />
        <Button variant="contained" color="primary" type="submit">
          Login
        </Button>
      </form>
      <Typography variant="body2" align="center" style={{ marginTop: '1rem' }}>
        Don't have an account? <Button onClick={() => navigate('/register')}>Register</Button>
      </Typography>
    </Paper>
  );
};

export default Login1;
