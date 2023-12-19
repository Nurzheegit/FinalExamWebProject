// main_card.js
import React, { useEffect, useState } from "react";
import "./main-card.css";
import apiservice from "../../service/api-service";

const MainCard = ({ city, country, onImageLoad }) => {
  const [mainImg, setMainImg] = useState("");

  useEffect(() => {
    const fetchWeatherAndImage = async () => {
      try {
        // Extract image data from the API response
        const imageResult = await fetchImage(city, country);
        // Log the received image URL to the console
        const imageUrl = imageResult.images[0].imageUrl;
        // console.log("Image URL:", imageUrl);
        setMainImg(imageUrl);

        // Use the image URL for display
        setMainImg(imageResult.images[0].imageUrl);

        // Pass the image URL to the parent component
        onImageLoad(imageResult.images[0].imageUrl);

        // Use the image URL for display
        setMainImg(imageResult.images[0].imageUrl);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchWeatherAndImage();
  }, [city, country, onImageLoad]);

  // Function to fetch image data from the provided API
  const fetchImage = async (city, country) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "X-API-KEY": "9236e3154133ad2512a203d006047cffb1b9a8ed",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        q: city,
        gl: country.toLowerCase(), // Assuming the country code is in lowercase
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