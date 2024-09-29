// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './Pages/HomePage';
import './App.css';

function App() {
    return (
        <div className="app">
            <Router>
                <Navbar />
                <main className="main">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </div>
    );
}

export default App;