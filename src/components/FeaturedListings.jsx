/* eslint-disable no-unused-vars */
import React from 'react';
import './FeaturedListings.css';

const FeaturedListings = () => {
  const listings = [
    { id: 1, title: 'Lüks Villa', price: '5.000.000 TL', location: 'İstanbul', image: 'https://via.placeholder.com/300x200' },
    { id: 2, title: 'Modern Daire', price: '2.500.000 TL', location: 'Ankara', image: 'https://via.placeholder.com/300x200' },
    { id: 3, title: 'Deniz Manzaralı Ev', price: '3.750.000 TL', location: 'İzmir', image: 'https://via.placeholder.com/300x200' },
  ];

  return (
    <div className="container">
      <h2 className="heading">Öne Çıkan İlanlar</h2>
      <div className="grid">
        {listings.map((listing) => (
          <div key={listing.id} className="card">
            <img src={listing.image} alt={listing.title} className="image" />
            <div className="card-content">
              <h3 className="card-title">{listing.title}</h3>
              <p className="card-location">{listing.location}</p>
              <p className="card-price">{listing.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedListings;
