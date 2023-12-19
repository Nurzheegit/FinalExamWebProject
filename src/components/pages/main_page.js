import React, { useState, useEffect } from "react";
import WeatherCard from "../weather-card/weather-card";
import MainCard from "../main-card/main-card"; // Import MainCard
import apiservice from "../../service/api-service";
import WeatherCard7Days from "../weather-card-7-days/weather-card-7-days";
const MainPage = () => {
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(true);
  const [mainCardImage, setMainCardImage] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            const result = await apiservice.getCurrentWeatherByCoords(latitude, longitude);
            setWeatherData(result);
            setLoading(false);
          },
          (error) => {
            console.error("Error getting location:", error);
            setLoading(false);
          }
        );
      } catch (error) {
        console.error("Error fetching weather:", error);
        setLoading(false);
      }
    };
    fetchWeather();
  }, []);

  return (
    <div className="main-container">
      <header>
        {/* <h1>Web Weather App</h1> */}
      </header>
      <MainCard
        city={weatherData.location?.name}
        country={weatherData.location?.country}
        onImageLoad={(imageUrl) => setMainCardImage(imageUrl)}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="weather-container">
          {weatherData?.current && Object.keys(weatherData.current).length > 0 && (
            <WeatherCard7Days query={weatherData.location.name}>

            </WeatherCard7Days>
          )}
        </div>
      )}
    </div>
  );
};

export default MainPage;
