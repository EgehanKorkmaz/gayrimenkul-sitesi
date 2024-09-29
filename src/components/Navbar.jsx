/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">GayrimenkulSitesi</Link>
        <div className="nav-links">
          <Link to="/" className="link">Ana Sayfa</Link>
          <Link to="/listings" className="link">İlanlar</Link>
          <Link to="/about" className="link">Hakkımızda</Link>
          <Link to="/contact" className="link">İletişim</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
