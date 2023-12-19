import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SportCardComponent from "../sport-card-component/sport-card-component";
import SearchInputComponent from "../search-input-component/search-input-component";

const WeatherSportPage = () => {
  const navigate = useNavigate();

  const [query, setQuery] = useState(null);
  const [error, setError] = useState(null);

  const handleSearchSubmit = (searchQuery) => {
    const url = `/weathersport?q=${searchQuery}`;
    setQuery(searchQuery);
    setError(null);
    navigate(url);
  };

  return (
    <div>
      <div className="mt-3 mb-3">
        <SearchInputComponent onSubmit={handleSearchSubmit} />
      </div>
      
      {query === null ? (
        <div className="center-of-sportpage">
          <div className="centered-background">
            <h2>Welcome, sports lover!</h2><br></br>
            <h3>
            On this page you can find out not only the address and date of the football matches. <br></br>
            By entering only the name of the country, you can also find out what the weather will be on the day of the match in the capital of the country. <br></br>
Use the search box above to get all the information.
            </h3>
          </div>
        </div>
      ) : (
        <div className="SearchField">

            <SportCardComponent />
        </div>
      )}
    </div>
  );
};

export default WeatherSportPage;
