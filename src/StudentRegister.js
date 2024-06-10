// src/StudentRegister.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './StudentRegister.css';

const StudentRegister = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [studentId, setStudentId] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            // Replace with your API endpoint
            const response = await axios.post('http://127.0.0.1:8000//api/student/register', {
                firstName,
                lastName,
                studentId,
                email,
                password,
            });
            alert('User Registered');
            history.push('/student-login');
        } catch (error) {
            console.error('Registration error', error);
            alert('Failed to register');
        }
    };

    return (
        <div className="register-container">
            <h2>Student Register</h2>
            <form onSubmit={handleRegister}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
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

export default StudentRegister;
