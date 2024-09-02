// src/components/Registration.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        // Here you would typically send a request to your backend to register the user
        alert('Registration successful');
        navigate('/login');
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label>Email: </label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Password: </label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Registration;