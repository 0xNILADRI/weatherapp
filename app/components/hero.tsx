"use client";

import { useState } from "react";
import { fetchWeather } from "@/utils/fetchWeather";

import Image from "next/image";
import WeatherImage from "@/public/weather-icons/thunderstorm.png";

const WeatherSection = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<any>(null);

  const getWeather = async () => {
    const data = await fetchWeather(city);
    setWeatherData(data);
  };

  return (
    <div className="hero">
      <div className="forecast-container">
        <div className="forecast text-black">Forecast</div>
      </div>

      <div className="image-container">
        <Image
          src={WeatherImage}
          alt="Weather Icon on Home Page"
          className="weather-main-icon"
        ></Image>
        {/* <div className="image-overlay"></div> */}
      </div>
      <div className="curr-temp">
        <span className="big-temp">
          23<sup className="degree text-stone-400">°</sup>
        </span>
        {/* <sup className="degree text-stone-400">°</sup> */}

        <p className="we-stat text-stone-400">Thunderclouds</p>
      </div>

      <div className="we-data">
        <div className="we-deta-one temp-det">
          <div className="temp-det-temp temp-det-one">23°</div>
          <div className="temp-l-h">
            <p className="temp-high">26° C</p>
            <p className="temp-low">22° C</p>
          </div>
        </div>

        <div className="we-deta-one aqi-uvi">
          <div className="aqi">
            AIR QUALITY 10 <br /> GOOD
          </div>
          <div className="uvi">
            UV INDEX 04 <br /> HIGH
          </div>
        </div>
      </div>
      <hr className="h-px bg-gray-700 border-0 m-4" />
      <div className=" flex flex-wrap">
        <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">1</div>
        <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">2</div>
        <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">3</div>
        <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">4</div>
        <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">5</div>
        <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">6</div>
      </div>
      {/* <input
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
      )} */}
    </div>
  );
};

export default WeatherSection;
