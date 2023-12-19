import React, { useEffect, useState } from "react";
import SportCard from "../sports-card/sports-card";
import apiservice from "../../service/api-service";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SportCardComponent = () => {
  const [sportData, setSportData] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Check if query is truthy before making the API call
        if (query) {
          const result = await apiservice.getEvents(query);
          setSportData(result);
        }
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };

    fetchWeather();
  }, [query]); // Include query as a dependency to re-run the effect when it changes

  return (
    <>
      <div className="ag-format-container">
        <div className="ag-courses_box">
          {sportData.football &&
            sportData.football.map((sportDataItem, index) => (
                <SportCard
                  key={index}
                  match={sportDataItem.match}
                  tournament={sportDataItem.tournament}
                  stadium={sportDataItem.stadium}
                  country={sportDataItem.country}
                  start={sportDataItem.start}
                  query={sportDataItem.country}
                />
            ))}
          {sportData.cricket &&
            sportData.cricket.map((sportDataItem, index) => (
              <SportCard
                key={index}
                match={sportDataItem.match}
                tournament={sportDataItem.tournament}
                stadium={sportDataItem.stadium}
                country={sportDataItem.country}
                start={sportDataItem.start}
                query={sportDataItem.country}
              />
            ))}
          {sportData.golf &&
            sportData.golf.map((sportDataItem, index) => (
              <SportCard
                key={index}
                match={sportDataItem.match}
                tournament={sportDataItem.tournament}
                stadium={sportDataItem.stadium}
                country={sportDataItem.country}
                start={sportDataItem.start}
                query={sportDataItem.country}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default SportCardComponent;
