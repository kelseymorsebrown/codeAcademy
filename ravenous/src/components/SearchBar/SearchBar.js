import React, { useState } from 'react';
import './SearchBar.css';

const sortByOptions = [
  {
    text: 'Best Match',
    id: 'best_match',
  },
  {
    text: 'Highest Rated',
    id: 'rating',
  },
  {
    text: 'Most Reviewed',
    id: 'review_count',
  },
];

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sortingOption, setSortingOption] = useState('best_match');

  const handleSortingChange = (sortByValue) => {
    setSortingOption(sortByValue);
  };

  const handleSearchTermChange = ({ target }) => setSearchTerm(target.value);

  const handleLocationChange = ({ target }) => setLocation(target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Searching Yelp with ${searchTerm}, ${location}, ${sortingOption}`
    );
  };

  const renderSortingOptions = () => {
    return sortByOptions.map((filter) => {
      const sortByValue = filter.id;
      const isActive = sortingOption === sortByValue;

      return (
        <li
          className={isActive ? 'active' : 'inactive'}
          onClick={() => {
            handleSortingChange(sortByValue);
          }}
          key={filter.id}
        >
          {filter.text}
        </li>
      );
    });
  };

  return (
    <div className="SearchBar">
      <div className="SearchSortingOptions">
        <ul>{renderSortingOptions()}</ul>
      </div>
      <div className="SearchInputs">
        <form>
          <div>
            <input
              type="search"
              name="term"
              id="term"
              placeholder="Search Business"
              onChange={handleSearchTermChange}
            />
            <input
              type="search"
              name="location"
              id="location"
              placeholder="Where"
              onChange={handleLocationChange}
            />
          </div>
          <div>
            <input type="submit" value="Let's Go" onClick={handleSubmit} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
