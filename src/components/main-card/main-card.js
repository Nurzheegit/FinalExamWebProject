// main_card.js
import React, { useEffect, useState } from "react";
import "./main-card.css";
import apiservice from "../../service/api-service";


const MainCard = ({ city, country, onImageLoad }) => {
  const [mainImg, setMainImg] = useState("");

  useEffect(() => {
    const fetchWeatherAndImage = async () => {
      try {
        const imageResult = await fetchImage(city, country);
        const imageUrl = imageResult.images[0].imageUrl;
        setMainImg(imageUrl);
        onImageLoad(imageUrl);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchWeatherAndImage();
  }, [city, country, onImageLoad]);



  const fetchImage = async (city, country) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "X-API-KEY": "053d9a57f83a144ccb6775873d74dc486d5bc412",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        q: city,
        gl: country.toLowerCase(),
      }),
    };

    const response = await fetch(
      "https://google.serper.dev/images",
      requestOptions
    );
    const data = await response.json();

    return data;
  };

  return (
    <>
      <div className="main-card-container">
        <div className="main-card-body">
          {mainImg && (
            <img src={mainImg} alt={`Weather in ${city}, ${country}`} />
          )}
          <div className="main-card-text">
            <h2>{city}</h2>
            <h2>{country}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCard;
