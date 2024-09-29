/* eslint-disable no-unused-vars */
import React from 'react';
import SearchBar from '../components/SearchBar';
import FeaturedListings from '../components/FeaturedListings';
import './HomePage.css';

const HomePage = () => {
    return (
      <div>
        <div className="hero">
          <div className="hero-content">
            <h1 className="hero-title">Hayalinizdeki Evi Bulun</h1>
            <p className="hero-subtitle">Binlerce gayrimenkul ilanı arasından size en uygun olanı seçin.</p>
            <SearchBar />
          </div>
        </div>
        <FeaturedListings />
      </div>
    );
  };
  
  export default HomePage;