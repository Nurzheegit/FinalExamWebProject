  // main.js
  import React, { useEffect, useState } from "react";
  import SearchInputComponent from "../search-input-component/search-input-component";
  import { useLocation, useNavigate } from "react-router-dom";
  import WeatherCard7Days from "../weather-card-7-days/weather-card-7-days";
  import MainCard from "../main-card/main-card";
  import apiservice from "../../service/api-service";

  const WeatherPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("q");

    const handleSearchSubmit = (searchQuery) => {
      const url = `/weather?q=${searchQuery}`;
      navigate(url);
    };

    const [weatherData, setWeatherData] = useState({});
    const [loading, setLoading] = useState(true);
    const [mainCardImage, setMainCardImage] = useState("");

    useEffect(() => {
      const fetchWeather = async () => {
        try {
          if (query) {
            const result = await apiservice.getCurrentWeather(query);
            setWeatherData(result);
            setLoading(false);
          }
        } catch (error) {
          console.error("Error fetching weather:", error);
        }
      };

      fetchWeather();
    }, [query]); // Add query as a dependency

    return (
      <>
        <div className="mt-3 mb-3">
          <SearchInputComponent onSubmit={handleSearchSubmit} />
        </div>
        {query === null ? (
          <div className="center-of-weatherpage">
            <div className="centered-background">
                <h2>Welcome!</h2>
                <h3>
                Use the search box above to find out the weather in your city for the week ahead.
                </h3>
            </div>
          </div>
        ) : (
          <div className="SearchField">
            {weatherData.location != null ? (
              <>
                <MainCard
                  city={weatherData.location?.name}
                  country={weatherData.location?.country}
                  onImageLoad={(imageUrl) => setMainCardImage(imageUrl)}
                />
                <WeatherCard7Days query={query} />
              </>
            ) : (
              <h1 className="errornadler">
                Убедитесь, что название города введено правильно
              </h1>
            )}
          </div>
        )}
      </>
    );
  };
  export default WeatherPage;
