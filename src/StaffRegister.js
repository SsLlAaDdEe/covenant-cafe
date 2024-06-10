// src/StaffRegister.js
import React, { useState } from 'react';
import './StaffRegister.css';

const StaffRegister = () => {
    const [staffId, setStaffId] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        // Add register logic here
        console.log('Register with:', { staffId, email, password });
    };

    return (
        <div className="register-container">
            <h2>Staff Register</h2>
            <form onSubmit={handleRegister}>
                <div className="form-group">
                    <label htmlFor="staffId">Staff ID</label>
                    <input
                        type="text"
                        id="staffId"
                        value={staffId}
                        onChange={(e) => setStaffId(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="register-button">Register</button>
            </form>
        </div>
    );
};

export default StaffRegister;
