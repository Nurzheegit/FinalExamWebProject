// api-service.js
const apiKey = '77bb3de42101400c920134450231712'; // Замените на ваш ключ API

const apiservice = {
  getCurrentWeather: async (city) => {
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      return data;
    } catch (error) {
      throw new Error(`Error fetching current weather: ${error.message}`);
    }
  },

  getCurrentWeatherByCoords: async (latitude, longitude) => {
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      return data;
    } catch (error) {
      throw new Error(`Error fetching weather by coords: ${error.message}`);
    }
  },


  getEvents: async (query) => {
    const apiUrl = `http://api.weatherapi.com/v1/sports.json?key=${apiKey}&q=${query}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      return data;
    } catch (error) {
      throw new Error(`Error fetching weather by coords: ${error.message}`);
    }
  },


  getForcast7days: async (query) => {
    const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${query}&days=7`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      return data;
    } catch (error) {
      throw new Error(`Error fetching weather by coords: ${error.message}`);
    }
  },

  getEvents: async (query) => {
    const apiUrl = `http://api.weatherapi.com/v1/sports.json?key=${apiKey}&q=${query}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      return data;
    } catch (error) {
      throw new Error(`Error fetching weather by coords: ${error.message}`);
    }
  },


  getForcast7days: async (query) => {
    const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${query}&days=7`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      return data;
    } catch (error) {
      throw new Error(`Error fetching weather by coords: ${error.message}`);
    }
  },


};

export default apiservice;
