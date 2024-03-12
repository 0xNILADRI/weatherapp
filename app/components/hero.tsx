"use client";

import { useState } from "react";
import { fetchWeather } from "@/utils/fetchWeather";

const WeatherSection = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<any>(null);

  const getWeather = async () => {
    const data = await fetchWeather(city);
    setWeatherData(data);
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={getWeather}>Get Weather</button>
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>{weatherData.weather[0].description}</p>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default WeatherSection;
