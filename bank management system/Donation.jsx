import React, { useState } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const InputForm = () => {
  const [id, setId] = useState('');
  const [amount, setAmount] = useState('');
  const [name, setName] = useState(''); // Added state for name input
  const [donations, setDonations] = useState([ // Initial table data
    { id: 1, amount: 50, name: 'Surya' },
    { id: 2, amount: 100, name: 'Sunil' },
    { id: 3, amount: 100, name: 'Sundar' },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDonation = { id: donations.length + 1, amount: parseFloat(amount), name };
    setDonations([...donations, newDonation]);
    setId('');
    setAmount('');
    setName('');
  };

  const styles = {
    container: {
      textAlign: 'center',
      marginTop: '100px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    formGroup: {
      marginBottom: '15px',
    },
    input: {
      padding: '8px',
      fontSize: '16px',
      width: '100%',
      boxSizing: 'border-box',
      borderRadius: '3px',
      border: '1px solid #ccc',
      marginBottom: '8px',
    },
    submitButton: {
      fontSize: '20px',
      padding: '10px',
      cursor: 'pointer',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '3px',
    },
    tableContainer: {
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label>Name</label>
          <input style={styles.input} type='text' value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div style={styles.formGroup}>
          <label>Donation Amount</label>
          <input style={styles.input} type='number' value={amount} onChange={(e) => setAmount(e.target.value)} required />
        </div>
        <div>
          <Button style={styles.submitButton} variant="contained" type='submit'>
            Submit
          </Button>
        </div>
      </form>

      {/* Updated table to display dynamic donations */}
      <TableContainer component={Paper} style={styles.tableContainer}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Donation Amount</TableCell>
              <TableCell>Account Holder</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {donations.map((donation) => (
              <TableRow key={donation.id}>
                <TableCell>{donation.id}</TableCell>
                <TableCell>${donation.amount}</TableCell>
                <TableCell>{donation.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default InputForm;
