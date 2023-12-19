import React from "react";
import weatherCardService from "./weather-icons-service";
const weatherIcon = weatherCardService.getIcon(122);

// Use the retrieved value as needed
console.log(weatherIcon);
