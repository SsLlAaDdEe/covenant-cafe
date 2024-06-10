// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import StudentLogin from './StudentLogin';
import StaffLogin from './StaffLogin';
import StudentRegister from './StudentRegister';
import StaffRegister from './StaffRegister';
import FrontPage from './FrontPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/staff-login" element={<StaffLogin />} />
        <Route path="/student-register" element={<StudentRegister/>} />
        <Route path="/staff-register" element={<StaffRegister/>} />
        <Route path="/frontpage" element={<FrontPage/>} />
      </Routes>
    </Router>
  );
}


export default App;
