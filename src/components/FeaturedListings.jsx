/* eslint-disable no-unused-vars */
import React from 'react';
import './FeaturedListings.css';

const FeaturedListings = () => {
  const listings = [
    { id: 1, title: 'Lüks Villa', price: '9.000.000 TL', location: 'İstanbul', image: 'https://img.freepik.com/free-vector/beautiful-home_24877-50819.jpg?t=st=1730383283~exp=1730386883~hmac=008544532b4b30abbb598cce35769e8304d53460b3ed6e46ec6d60834fe0725c&w=1060' },
    { id: 2, title: 'Modern Daire', price: '2.500.000 TL', location: 'Ankara', image: 'https://img.freepik.com/free-vector/beautiful-home_24877-50819.jpg?t=st=1730383283~exp=1730386883~hmac=008544532b4b30abbb598cce35769e8304d53460b3ed6e46ec6d60834fe0725c&w=1060' },
    { id: 3, title: 'Deniz Manzaralı Ev', price: '3.750.000 TL', location: 'İzmir', image: 'https://img.freepik.com/free-vector/beautiful-home_24877-50819.jpg?t=st=1730383283~exp=1730386883~hmac=008544532b4b30abbb598cce35769e8304d53460b3ed6e46ec6d60834fe0725c&w=1060' },
    { id: 4, title: 'Deniz Manzaralı Ev', price: '3.750.000 TL', location: 'İzmir', image: 'https://img.freepik.com/free-vector/beautiful-home_24877-50819.jpg?t=st=1730383283~exp=1730386883~hmac=008544532b4b30abbb598cce35769e8304d53460b3ed6e46ec6d60834fe0725c&w=1060' },
  ];

  return (
    <div className="container">
      <h2 className="heading">İlanlar</h2>
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
