import React from 'react';
import './SearchBar.css';

const searchFilters = [
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

const filterButtons = searchFilters.map((filter) => {
  return <li key={filter.id}>{filter.text}</li>;
});

function SearchBar() {
  return (
    <div className="SearchBar">
      <div className="SearchSortingOptions">
        <ul>{filterButtons}</ul>
      </div>
      <div className="SearchInputs">
        <form>
          <div>
            <input
              type="search"
              name="term"
              id="term"
              placeholder="Search Business"
            />
            <input
              type="search"
              name="location"
              id="location"
              placeholder="Where"
            />
          </div>
          <div>
            <input type="submit" value="Let's Go" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
