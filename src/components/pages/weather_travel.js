// WeatherTravelPage.js
import React, { useState } from "react";
import SearchInputComponent from "../search-input-component/search-input-component";
import { useNavigate } from "react-router-dom";
import TextContainer from "../text-container/text-container";
import WeatherCard7Days from "../weather-card-7-days/weather-card-7-days";
import WeatherCardQuery from "../weather-card-with-query/weather-card-with-quety";

const WeatherTravelPage = () => {
  const [texts, setTexts] = useState([]);
  const navigate = useNavigate();

  const handleSearchSubmit = (searchQuery) => {
    if (texts.length < 7) {
      const updatedTexts = [...texts, searchQuery];
      setTexts(updatedTexts);
    }
  };

  return (
    <div>

      <div className="m-auto mt-5 col-lg-5 col-md-7 col-sm-9 gray-container">
        <div className="text-container">

          <SearchInputComponent onSubmit={handleSearchSubmit} />
          <TextContainer texts={texts} setTexts={setTexts} />
        </div>
      </div>
      {texts == [] ? (
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
      <div className="weather-card-7-days-container">

        {texts.map((text) => (

          <div className="weather-car-7-days-item">
            <WeatherCardQuery query={text} />
          </div>
        ))}
      </div>
      )}

    </div>
  );
};

export default WeatherTravelPage;
