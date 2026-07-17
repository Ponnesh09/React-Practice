import React from "react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div>
      {/* <h1>Search-Bar Child</h1> */}

      <input
        type="text"
        value={search}
        placeholder="search here..."
        // get value from input and set to update state
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
