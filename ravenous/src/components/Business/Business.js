import React from 'react';
import './Business.css';

function Business({ business }) {
  return (
    <div className="BusinessContainer">
      <div className="ImageContainer">
        <img
          key={business.name}
          alt={business.name}
          src={business.image}
          aria-label={business.name}
        />
      </div>
      <h2>{business.name}</h2>
      <div className="BusinessInfo">
        <div className="BusinessAddress">
          <p>{business.address}</p>
          <p>
            {business.city}, {business.state}
          </p>
          <p>{business.zipcode}</p>
        </div>
        <div className="BusinessStats">
          <p className="boldAndGold">{business.category.toUpperCase()}</p>
          <p className="rating boldAndGold"> {business.rating} ⭐</p>
          <p>{business.review_count} Reviews</p>
        </div>
      </div>
    </div>
  );
}

export default Business;
