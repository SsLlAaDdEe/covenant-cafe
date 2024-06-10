// src/StaffLogin.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './StaffLogin.css';

const StaffLogin = () => {
    const [staffId, setStaffId] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Add login logic here
        console.log('Login with:', { staffId, password });
    };

    return (
        <div className="login-container">
            <h2>Staff Login</h2>
            <form onSubmit={handleLogin}>
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
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
            <Link to="/staff-register" className="register-link">Register</Link>
        </div>
    );
};

export default StaffLogin;
