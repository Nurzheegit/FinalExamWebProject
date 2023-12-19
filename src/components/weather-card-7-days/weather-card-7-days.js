import React, { useEffect, useState } from "react";
import './weather-card-7-days.css'

import apiservice from "../../service/api-service";
import getIcon from "../../service/weather-icons-service";
import WeatherCard from "../weather-card/weather-card";

const WeatherCard7Days = ({ query }) => {
    const [location, setLocation] = useState({});
    const [forecastDays, setForecastDays] = useState([]);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                if (query) {
                    const result = await apiservice.getForcast7days(query);
                    setLocation(result.location);
                    setForecastDays(result.forecast.forecastday);
                }
            } catch (error) {
                console.error("Error fetching weather:", error);
            }
        };

        fetchWeather();
    }, [query]); // Add query as a dependency

    return (
        <div className="weather-card-7-days-container">
            {forecastDays.map((forecastDay, index) => (

                <div className="weather-car-7-days-item">
                    <WeatherCard
                        key={index}
                        img={getIcon(forecastDay.day.condition.icon)}
                        type={forecastDay.day.condition.text}
                        tempc={forecastDay.day.avgtemp_c}
                        city={location.name}
                        windSpeed={forecastDay.day.maxwind_kph}
                        pressure_in={forecastDay.day.daily_chance_of_rain}
                        uv={forecastDay.day.uv}
                        date={forecastDay.date}
                    />
                </div>
            ))}
        </div>
    );
};

export default WeatherCard7Days;
