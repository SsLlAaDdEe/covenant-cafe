// src/StudentLogin.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './StudentLogin.css';

const StudentLogin = () => {
    const [studentId, setStudentId] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Add login logic here
        console.log('Login with:', { studentId, password });
    };

    return (
        <div className="login-container">
            <h2>Student Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="studentId">Student ID</label>
                    <input
                        type="text"
                        id="studentId"
                        value={studentId}
                        onChange={(e) => setStudentId(e.target.value)}
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
            <Link to="/student-register" className="register-link">Register</Link>
        </div>
    );
};

export default StudentLogin;
