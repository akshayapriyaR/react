import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios to handle the POST request

const AddCustomer = () => {
  // State variables to capture user inputs
  const [username, setUsername] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [branch, setBranch] = useState('');
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Prepare the customer data
    const customerData = {
      username,
      accountNumber,
      branch,
    };

    try {
      // Make a POST request to add the customer
      const response = await axios.post('http://localhost:3000/addCustomer', customerData);

      if (response.status === 201) {
        // If successful, navigate to home page
        alert('Customer added successfully');
        navigate('/home');
      } else {
        alert('Error adding customer');
      }
    } catch (error) {
      console.error('There was an error adding the customer!', error);
      alert('There was an error adding the customer. Please check the console for more details.');
    }
  };

  // Styles for the form and layout
  const styles = {
    container: {
      marginTop: "100px",
      backgroundColor: '#f0f0f0',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    informationText: {
      color: 'black',
      fontSize: '20px',
      marginBottom: '20px',
      textAlign: 'center',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: '.2px solid black',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      width: '400px',
      padding: '23px',
      backgroundColor: 'white',
    },
    formGroup: {
      marginBottom: '20px',
      width: '100%',
    },
    input: {
      padding: '10px',
      fontSize: '16px',
      width: '100%',
      boxSizing: 'border-box',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    submitButton: {
      backgroundColor: '#1976d2',
      color: 'white',
      padding: '12px',
      fontSize: '18px',
      cursor: 'pointer',
      border: 'none',
      borderRadius: '5px',
      width: '100%',
    },
    copyrightText: {
      marginTop: '20px',
      height: '50px',
      width: '100%',
      backgroundColor: 'lightgray',
      padding: '10px',
      textAlign: 'center',
      borderRadius: '5px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.informationText}>
        <p>
          Fill in the necessary information, which may include your name, account number, and branch details. Once done, press submit.
        </p>
      </div>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label>Enter Full Name</label>
          <input 
            style={styles.input} 
            type="text" 
            value={username} 
            onChange={(event) => setUsername(event.target.value)} 
            required 
          />
        </div>
        <div style={styles.formGroup}>
          <label>Enter 6 Digit Account Number</label>
          <input 
            style={styles.input} 
            type="text" 
            value={accountNumber} 
            onChange={(event) => setAccountNumber(event.target.value)} 
            required 
            pattern="\d{6}" 
            title="Account number must be 6 digits" 
          />
        </div>
        <div style={styles.formGroup}>
          <label>Enter Branch</label>
          <input 
            style={styles.input} 
            type="text" 
            value={branch} 
            onChange={(event) => setBranch(event.target.value)} 
            required 
          />
        </div>
        <div>
          <Button 
            style={styles.submitButton} 
            variant="contained" 
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>

      <p style={styles.copyrightText}>
        Copyright © 2012 - 2024 TermsFeed®. All rights reserved.
      </p>
    </div>
  );
};

export default AddCustomer;
