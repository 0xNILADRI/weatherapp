"use client";

import { useState } from "react";
import { fetchWeather } from "@/utils/fetchWeather";

import Image from "next/image";
import WeatherImage from "@/public/weather-logo/thunderstorm.png";
import Sunset from "@/public/weather-icons/sunset.png";
import WindSpeed from "@/public/weather-icons/wind-speed.png";
import AirQuality from "@/public/weather-icons/air-quality.png";
import UvIndex from "@/public/weather-icons/uv-index.png";

import { WiNightThunderstorm } from "react-icons/wi";

const WeatherSection = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<any>(null);

  const getWeather = async () => {
    const data = await fetchWeather(city);
    setWeatherData(data);
  };

  const [defaultHover, setDefaultHover] = useState(true);

  const handleHover = () => {
    setDefaultHover(false);
  };

  return (
    <div className="hero max-w-7xl">
      <div className="forecast-container">
        <div className="forecast text-black">Forecast</div>
      </div>

      <div className="image-container">
        <Image
          src={WeatherImage}
          alt="Weather Icon on Home Page"
          className="weather-main-icon"
          priority={true}
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

      <div className="weather-card  p-2">
        <div className="weather-item p-2 one">
          <div className="weather-card-temp text-center">25°</div>
          <div className="weather-card-img">
            <WiNightThunderstorm color="yellow" className="weather-item-icon" />
          </div>
          <div className="weather-card-time text-center">12:00</div>
        </div>
        <div
          className={
            defaultHover
              ? "weather-item p-2 two default"
              : "weather-item p-2 two"
          }
          onMouseOver={handleHover}
        >
          <div className="weather-card-temp text-center">28°</div>
          <div className="weather-card-img">
            <WiNightThunderstorm color="yellow" className="weather-item-icon" />
          </div>
          <div className="weather-card-time text-center">12:00</div>
        </div>
        <div className="weather-item p-2 three">
          <div className="weather-card-temp text-center">22°</div>
          <div className="weather-card-img">
            <WiNightThunderstorm color="yellow" className="weather-item-icon" />
          </div>
          <div className="weather-card-time text-center">12:00</div>
        </div>
        <div className="weather-item p-2 four">
          <div className="weather-card-temp text-center">25°</div>
          <div className="weather-card-img">
            <WiNightThunderstorm color="yellow" className="weather-item-icon" />
          </div>
          <div className="weather-card-time text-center">12:00</div>
        </div>
        <div className="weather-item p-2 five">
          <div className="weather-card-temp text-center">25°</div>
          <div className="weather-card-img">
            <WiNightThunderstorm color="yellow" className="weather-item-icon" />
          </div>
          <div className="weather-card-time text-center">12:00</div>
        </div>
        <div className="weather-item p-2 six">
          <div className="weather-card-temp text-center">25°</div>
          <div className="weather-card-img">
            <WiNightThunderstorm color="yellow" className="weather-item-icon" />
          </div>
          <div className="weather-card-time text-center">12:00</div>
        </div>
        <div className="weather-item p-2 seven">
          <div className="weather-card-temp text-center">25°</div>
          <div className="weather-card-img">
            <WiNightThunderstorm color="yellow" className="weather-item-icon" />
          </div>
          <div className="weather-card-time text-center">12:00</div>
        </div>
        <div className="weather-item p-2 eight">
          <div className="weather-card-temp text-center">25°</div>
          <div className="weather-card-img">
            <WiNightThunderstorm color="yellow" className="weather-item-icon" />
          </div>
          <div className="weather-card-time text-center">12:00</div>
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
              src={AirQuality}
              alt="air quality logo"
              className="inside-data-stat-image-sm air-quality"
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
            <div className="outer-circle">
              <div className="inner-circle"></div>
            </div>
            <p className="inside-data-stat text-left">
              <b>68%</b>
            </p>
          </div>
        </div>
        <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 pt-2 pb-2 pl-4 pr-2 in-data">
          <div className="inside-data text-left">
            <p className="inside-data-text">WIND SPEED</p>
            <Image
              src={WindSpeed}
              alt="wind speed logo"
              className="inside-data-stat-image wind-speed"
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
              src={UvIndex}
              alt="uv index logo"
              className="inside-data-stat-image-sm uv-index"
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
              src={Sunset}
              alt="sunset logo"
              className="inside-data-stat-image"
            ></Image>
            <p className="inside-data-stat text-left">
              <b>20:50</b>
            </p>
          </div>
        </div>
        <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 pt-2 pb-4 pl-2 pr-4 in-data">
          <div className="inside-data text-center transparent end-feels ">
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
