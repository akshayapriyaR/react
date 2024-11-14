import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, TextField, Typography, Paper } from '@mui/material';

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Email validation
    if (!email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    // Password validation
    const passwordValid = password.length >= 6 && /\d/.test(password);
    if (!passwordValid) {
      alert('Password must be at least 6 characters long and contain at least one number.');
      return;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    try {
      // Check if username already exists
      const response = await axios.get("http://localhost:3000/users");
      const existingUser = response.data.find(user => user.username === username);
      
      if (existingUser) {
        alert('Username already exists.');
        return;
      }

      // Register the user
      await axios.post("http://localhost:3000/users", { email, username, password });
      alert('Registration successful! You can now log in.');
      navigate('/login1');
    } catch (error) {
      console.error("Error during registration:", error);
      alert('An error occurred during registration. Please try again.');
    }
  };

  return (
    <Paper style={{ padding: '2rem', maxWidth: '400px', margin: '2rem auto', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}>
      <Typography variant="h4" align="center" style={{ marginBottom: '1.5rem', color: '#1976d2' }}>Register</Typography>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ marginBottom: '1rem' }}
        />
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
        <TextField
          label="Confirm Password"
          type="password"
          variant="outlined"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          style={{ marginBottom: '1rem' }}
        />
        <Button variant="contained" color="primary" type="submit">
          Register
        </Button>
      </form>
      <Typography variant="body2" align="center" style={{ marginTop: '1rem' }}>
        Already have an account? <Button onClick={() => navigate('/login1')}>Login</Button>
      </Typography>
    </Paper>
  );
};

export default Register;
