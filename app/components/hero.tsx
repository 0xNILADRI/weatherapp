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
      </div>
      <div className="curr-temp">
        <span className="big-temp">
          23<sup className="degree text-stone-400">°</sup>
        </span>

        <p className="we-stat text-stone-400">Thunderclouds</p>
      </div>

      <div className="flex flex-wrap we-data">
        <div className="w-1/2 ">
          <div className="p-4 temp-det">
            <div className="temp-det-temp temp-det-one">23°</div>
            <div className="temp-l-h">
              <p className="temp-high">26° C</p>
              <p className="temp-low">22° C</p>
            </div>
          </div>
        </div>

        <div className="we-deta-one aqi-uvi w-1/2 p-4 ">
          <div className="aqi">
            AIR QUALITY 10 <br /> GOOD
          </div>
          <div className="uvi">
            UV INDEX 04 <br /> HIGH
          </div>
        </div>
      </div>
      <hr className="h-px bg-gray-800 border-0 m-4" />
      <div className=" flex flex-wrap">
        <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 pt-4 pb-2 pl-4 pr-2 in-data">
          <div className="inside-data text-left">
            <p className="inside-data-text">
              AIR QUALITY <br />
              <b>GOOD</b>
            </p>
            <Image
              src=""
              alt="air quality logo"
              className="inside-data-stat-image"
            ></Image>
            <p className="inside-data-stat text-left">
              {" "}
              <b>10</b>
            </p>
          </div>
        </div>
        <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 pt-4 pb-2 pl-2 pr-4 in-data">
          <div className="inside-data text-left">
            <p className="inside-data-text">HUMIDITY</p>
            <Image
              src=""
              alt="humidy logo"
              className="inside-data-stat-image"
            ></Image>
            <p className="inside-data-stat text-left">
              <b>68%</b>
            </p>
          </div>
        </div>
        <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 pt-2 pb-2 pl-4 pr-2 in-data">
          <div className="inside-data text-left">
            <p className="inside-data-text">WIND SPEED</p>
            <Image
              src=""
              alt="wind speed logo"
              className="inside-data-stat-image"
            ></Image>
            <p className="inside-data-stat text-left">
              <b>02 MPH</b>
            </p>
          </div>
        </div>
        <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 pt-2 pb-2 pl-2 pr-4 in-data">
          <div className="inside-data text-left">
            <p className="inside-data-text">
              UV INDEX <br />
              <b>VERY HIGH</b>
            </p>
            <Image
              src=""
              alt="uv index logo"
              className="inside-data-stat-image"
            ></Image>
            <p className="inside-data-stat text-left">
              <b>08</b>
            </p>
          </div>
        </div>
        <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 pt-2 pb-4 pl-4 pr-2 in-data">
          <div className="inside-data text-left">
            <p className="inside-data-text">SUNSET</p>
            <Image
              src=""
              alt="sunset logo"
              className="inside-data-stat-image"
            ></Image>
            <p className="inside-data-stat text-left">
              <b>20:50</b>
            </p>
          </div>
        </div>
        <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 pt-2 pb-4 pl-2 pr-4 in-data">
          <div className="inside-data text-center transparent">
            <div className="p-4 feels-like-det ">
              <div className="feels-like temp-high">FEELS LIKE</div>
              <div className="temp-det-temp feels-like-det-one">23°</div>
            </div>
          </div>
        </div>
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
