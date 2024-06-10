// src/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage-container">
            <h1 className="homepage-title">Covenant University: Cafe 1</h1>
            <div className="button-container">
                <Link to="/student-login" className="homepage-button">Student</Link>
                <Link to="/staff-login" className="homepage-button">Staff</Link>
            </div>
        </div>
    );
};

export default HomePage;
