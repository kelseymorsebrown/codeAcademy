import React from 'react';
import './SearchErrorMessage.css';
function SearchErrorMessage({ errorMessage }) {
  return (
    <div className="searchErrorMessage">
      <h2>Oops!</h2>
      {errorMessage}
    </div>
  );
}

export default SearchErrorMessage;
