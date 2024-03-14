"use client";

import { useState, useEffect } from "react";
import { fetchWeather } from "@/utils/fetchWeather";

import Image from "next/image";
import Thunderstorm from "@/public/weather-logo/thunderstorm.png";
import RainDay from "@/public/weather-logo/rain-day.png";
import RainNight from "@/public/weather-logo/rain-night.png";
import ShowerRain from "@/public/weather-logo/shower-rain.png";
import ScatterClouds from "@/public/weather-logo/scatter-clouds.png";
import Day from "@/public/weather-logo/day.png";
import Night from "@/public/weather-logo/night.png";
import Snowflake from "@/public/weather-logo/snowflake.png";
import BrokenClouds from "@/public/weather-logo/broken-clouds.png";
import Mist from "@/public/weather-logo/mist.png";
import FewCloudsDay from "@/public/weather-logo/few-clouds-day.png";
import FewCloudsNight from "@/public/weather-logo/few-clouds-night.png";

import Sunset from "@/public/weather-icons/sunset.png";
import WindSpeed from "@/public/weather-icons/wind-speed.png";
import AirQuality from "@/public/weather-icons/air-quality.png";
import UvIndex from "@/public/weather-icons/uv-index.png";

import { WiNightThunderstorm } from "react-icons/wi";

const WeatherIcon = ({ iconCode }: { iconCode: string }) => {
  let imagePath;

  switch (iconCode) {
    case "01d":
      imagePath = Day;
      break;
    case "01n":
      imagePath = Night;
      break;
    case "02d":
      imagePath = FewCloudsDay;
      break;
    case "02n":
      imagePath = FewCloudsNight;
      break;
    case "03d":
    case "03n":
      imagePath = ScatterClouds;
      break;
    case "04d":
    case "04n":
      imagePath = BrokenClouds;
      break;
    case "09d":
    case "09n":
      imagePath = ShowerRain;
      break;
    case "10d":
      imagePath = RainDay;
      break;
    case "10n":
      imagePath = RainNight;
      break;
    case "11d":
    case "11n":
      imagePath = Thunderstorm;
      break;
    case "13d":
    case "13n":
      imagePath = Snowflake;
      break;
    case "50d":
    case "50n":
      imagePath = Mist;
      break;
    default:
      imagePath = ScatterClouds;
      break;
  }

  return (
    <Image
      src={imagePath}
      alt="Weather Icon on Home Page"
      className="weather-main-icon"
      priority={true}
    ></Image>
  );
};

interface HeroProps {
  defaultCity: string;
}

const Hero: React.FC<HeroProps> = ({ defaultCity }) => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [defaultHover, setDefaultHover] = useState(true);

  const handleHover = () => {
    setDefaultHover(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWeather(defaultCity);
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, [defaultCity]);

  function formatTime(x: Date) {
    const hours = x.getHours();
    const minutes = x.getMinutes();
    return `${hours}:${minutes}`;
  }

  return (
    <>
      {weatherData ? (
        <div>
          <div className="hero max-w-7xl">
            <div className="forecast-container">
              <div className="forecast text-black">Forecast</div>
            </div>

            <div className="image-container">
              <WeatherIcon iconCode={weatherData.weather[0].icon} />
              {/* <Image
                src={Thunderstorm}
                alt="Weather Icon on Home Page"
                className="weather-main-icon"
                priority={true}
              ></Image> */}
            </div>
            <div className="curr-temp">
              <span className="big-temp">
                {parseInt(weatherData.main.temp)}
                <sup className="degree text-stone-400">°</sup>
              </span>

              <p className="we-stat text-stone-400">
                {weatherData.weather[0].description}
              </p>
            </div>

            <div className="flex flex-wrap we-data">
              <div className="w-1/2 ">
                <div className="p-4 temp-det">
                  <div className="temp-det-temp temp-det-one">
                    {parseInt(weatherData.main.temp)}°
                  </div>
                  <div className="temp-l-h">
                    <p className="temp-high">
                      H: {parseInt(weatherData.main.temp_max)}° C
                    </p>
                    <p className="temp-low">
                      L: {parseInt(weatherData.main.temp_min)}° C
                    </p>
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
                  <WiNightThunderstorm
                    color="yellow"
                    className="weather-item-icon"
                  />
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
                  <WiNightThunderstorm
                    color="yellow"
                    className="weather-item-icon"
                  />
                </div>
                <div className="weather-card-time text-center">12:00</div>
              </div>
              <div className="weather-item p-2 three">
                <div className="weather-card-temp text-center">22°</div>
                <div className="weather-card-img">
                  <WiNightThunderstorm
                    color="yellow"
                    className="weather-item-icon"
                  />
                </div>
                <div className="weather-card-time text-center">12:00</div>
              </div>
              <div className="weather-item p-2 four">
                <div className="weather-card-temp text-center">25°</div>
                <div className="weather-card-img">
                  <WiNightThunderstorm
                    color="yellow"
                    className="weather-item-icon"
                  />
                </div>
                <div className="weather-card-time text-center">12:00</div>
              </div>
              <div className="weather-item p-2 five">
                <div className="weather-card-temp text-center">25°</div>
                <div className="weather-card-img">
                  <WiNightThunderstorm
                    color="yellow"
                    className="weather-item-icon"
                  />
                </div>
                <div className="weather-card-time text-center">12:00</div>
              </div>
              <div className="weather-item p-2 six">
                <div className="weather-card-temp text-center">25°</div>
                <div className="weather-card-img">
                  <WiNightThunderstorm
                    color="yellow"
                    className="weather-item-icon"
                  />
                </div>
                <div className="weather-card-time text-center">12:00</div>
              </div>
              <div className="weather-item p-2 seven">
                <div className="weather-card-temp text-center">25°</div>
                <div className="weather-card-img">
                  <WiNightThunderstorm
                    color="yellow"
                    className="weather-item-icon"
                  />
                </div>
                <div className="weather-card-time text-center">12:00</div>
              </div>
              <div className="weather-item p-2 eight">
                <div className="weather-card-temp text-center">25°</div>
                <div className="weather-card-img">
                  <WiNightThunderstorm
                    color="yellow"
                    className="weather-item-icon"
                  />
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
                    <div
                      className="inner-circle"
                      style={{
                        width: `${weatherData.main.humidity}%`,
                        height: `${weatherData.main.humidity}%`,
                      }}
                    ></div>
                  </div>
                  <p className="inside-data-stat text-left">
                    <b>{weatherData.main.humidity}%</b>
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
                    <b>{weatherData.wind.speed} KPH</b>
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
                    <b>{formatTime(new Date(weatherData.sys.sunset * 1000))}</b>
                  </p>
                </div>
              </div>
              <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 pt-2 pb-4 pl-2 pr-4 in-data">
                <div className="inside-data text-center transparent end-feels ">
                  <div className="p-4 feels-like-det ">
                    <div className="feels-like temp-high">FEELS LIKE</div>
                    <div className="temp-det-temp feels-like-det-one">
                      {parseInt(weatherData.main.feels_like)}°
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Hero;
