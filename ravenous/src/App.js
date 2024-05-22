import React, { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import BusinessList from './components/BusinessList/BusinessList';
import './App.css';
import yelpAPI from './utils/yelpApi';

// const mockBusiness = {
//   image: 'IDOScard.png',
//   name: 'I Dream of Sweets',
//   address: '824 Noyes St.',
//   city: 'Evanston',
//   state: 'IL',
//   zipcode: '60202',
//   category: 'Cafe',
//   rating: 3,
//   review_count: 2,
// };

// const mockBusinessList = [mockBusiness, mockBusiness, mockBusiness];

function App() {
  const [businesses, setBusinesses] = useState([]);

  const searchYelp = async (searchTerm, location, sortingOption) => {
    const businesses = await yelpAPI.getBusinessListings(
      searchTerm,
      location,
      sortingOption
    );
    console.log(businesses);
    setBusinesses(businesses);
  };
  return (
    <div className="App">
      <header>
        <h1>Ravenous</h1>
      </header>
      <main>
        <SearchBar searchYelp={searchYelp} />
        {businesses ? (
          <BusinessList businesses={businesses} />
        ) : (
          <div className="searchError">
            Please enter both a search term and location.
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
