// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import StudentLogin from './StudentLogin';
import StaffLogin from './StaffLogin';
import StudentRegister from './StudentRegister';
import StaffRegister from './StaffRegister';
import FrontPage from './FrontPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact component={HomePage} />
                <Route path="/student-login" component={StudentLogin} />
                <Route path="/staff-login" component={StaffLogin} />
                <Route path="/student-register" component={StudentRegister} />
                <Route path="/staff-register" component={StaffRegister} />
            </Routes>
        </Router>
    );
};

export default App;
