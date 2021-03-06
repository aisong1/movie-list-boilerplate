import React from 'react';

const Search = (props) => (
  <form id="searchBar" className="searchBar" onSubmit={(e) => props.handleSearchSubmit(e)}>
    <input 
      type="text"
      placeholder="Search..."
      onChange={(e) => props.handleSearchChange(e)}
    />
    <button>
      Go!
    </button>
  </form>
)

export default Search;