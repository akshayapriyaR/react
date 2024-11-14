import React, { useState } from 'react';
import { Button, TextField, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login1 = () => {
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the query submission here
    console.log('Query submitted:', { email, query });
    alert('Query submitted successfully!'); // Replace with actual submission logic
    navigate('/home'); // Navigate to the home page after submission
  };

  return (
    <Paper style={{ padding: '2rem', maxWidth: '400px', margin: '2rem auto', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}>
      <Typography variant="h4" align="center" style={{ marginBottom: '1.5rem', color: '#1976d2' }}>Balance Inquiry</Typography>
      <Typography variant="body1" style={{ marginBottom: '1.5rem' }}>
        Queries are used to check and display account balances for customers, view transaction history, verify transactions, assess creditworthiness, and detect fraud.
      </Typography>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          style={{ marginBottom: '1rem' }}
        />
        <TextField
          label="Query"
          variant="outlined"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          required
          style={{ marginBottom: '1rem' }}
        />
        <Button variant="contained" color="primary" type="submit" style={{ marginTop: '15px' }}>
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default Login1;
