import React, { useState } from "react";

const SearchInputComponent = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSubmit(searchQuery);
  };

  return (
    <div className="container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          className="form-control"
          id="searchQuery"
          placeholder="city_name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchInputComponent;
