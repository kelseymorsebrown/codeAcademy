import React, { useState } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import BusinessList from '../components/BusinessList/BusinessList';
import SearchErrorMessage from '../components/SearchErrorMessage/SearchErrorMessage';
import './App.css';
import yelpAPI from '../utils/yelpApi';

function App() {
  const [businesses, setBusinesses] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const searchYelp = async (searchTerm, location, sortingOption) => {
    const businesses = await yelpAPI.getBusinessListings(
      searchTerm,
      location,
      sortingOption
    );

    setBusinesses(businesses);
    if (!location) {
      !searchTerm
        ? setErrorMessage(`Where do you want to search?`)
        : setErrorMessage(`Where do you want to search for "${searchTerm}"?`);
    } else {
      setErrorMessage(null);
    }
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
          <SearchErrorMessage errorMessage={errorMessage} />
        )}
      </main>
    </div>
  );
}

export default App;
