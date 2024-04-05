import React from 'react';
import Business from '../Business/Business';
import './BusinessList.css';

function BusinessList() {
  return (
    <div className="BusinessList">
      <Business />
      <Business />
      <Business />
    </div>
  );
}

export default BusinessList;
