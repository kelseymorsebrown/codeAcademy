import React from 'react';
import Business from '../Business/Business';
import './BusinessList.css';

function BusinessList({ businesses }) {
  const businessList = businesses.map((business, i) => {
    return <Business business={business} key={business.name + i} />;
  });

  return <div className="BusinessList">{businessList}</div>;
}

export default BusinessList;
