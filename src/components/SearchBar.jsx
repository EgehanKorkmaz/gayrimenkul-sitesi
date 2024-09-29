/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Aranan terim:', searchTerm);
  };

  return (
    <form onSubmit={handleSearch} className="form">
      <div className="input-container">
        <input
          className="input"
          type="text"
          placeholder="Konum, fiyat veya özellik ara..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="button" type="submit">
          Ara
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
