// src/StudentLogin.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './StudentLogin.css';

const StudentLogin = () => {
    const [studentId, setStudentId] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();

    const handleLogin = async () => {
        const userData = { student_id: studentId, password };

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/student/login', userData);
            const { name, balance, transaction_history } = response.data;
            history.push('/frontpage', { name, balance, transaction_history });
          } catch (error) {
            console.error('Login failed:', error);
            alert('Failed to login');
          }
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
                <button type="submit" className="login-button" onClick={handleLogin}>Login</button>
            </form>
            <Link to="/student-register" className="register-link">Register</Link>
        </div>
    );
};

export default StudentLogin;
