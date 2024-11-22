import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './pages/Home';


// Protected Route Component


const App = () => {
    return (
        <div>

            <Router>
                <Routes>
                    <Route path="/signup" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Home />} />
                </Routes>
            </Router>
        </div>
    );
};


export default App;