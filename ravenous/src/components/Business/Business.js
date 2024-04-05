import React from 'react';
import './Business.css';

const business = {
  image: 'IDOScard.png',
  name: 'I Dream of Sweets',
  address: '824 Noyes St.',
  city: 'Evanston',
  state: 'IL',
  zipcode: '60202',
  category: 'cafe',
  rating: 3,
  review_count: 2,
};

function Business() {
  return (
    <div className="BusinessContainer">
      <div className="ImageContainer">
        <img
          key={business.name}
          alt={business.name}
          src={require(`../../images/${business.image}`)}
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
          <p>
            <strong>{business.category}</strong>
          </p>
          <p>{business.rating} Stars</p>
          <p>{business.review_count} Reviews</p>
        </div>
      </div>
    </div>
  );
}

export default Business;
