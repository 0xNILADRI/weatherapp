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
import Pressure from "@/public/weather-icons/pressure.png";

import { WiDaySunny } from "react-icons/wi";
import { WiNightClear } from "react-icons/wi";
import { WiDayCloudy } from "react-icons/wi";
import { WiNightCloudy } from "react-icons/wi";
import { WiDayCloudyGusts } from "react-icons/wi";
import { WiCloudy } from "react-icons/wi";
import { WiDayShowers } from "react-icons/wi";
import { WiNightShowers } from "react-icons/wi";
import { WiDayRain } from "react-icons/wi";
import { WiNightRain } from "react-icons/wi";
import { WiDayThunderstorm } from "react-icons/wi";
import { WiNightThunderstorm } from "react-icons/wi";
import { WiSnow } from "react-icons/wi";
import { WiDayFog } from "react-icons/wi";
import { WiNightFog } from "react-icons/wi";

const WeatherLogo = ({ iconCode }: { iconCode: string }) => {
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

const aqiStatus = (aqi_val: number) => {
  let aqiStat;

  switch (aqi_val) {
    case 1:
      aqiStat = "Good";
      break;
    case 2:
      aqiStat = "Fair";
      break;
    case 3:
      aqiStat = "Moderate";
      break;
    case 4:
      aqiStat = "Poor";
      break;
    case 5:
      aqiStat = "Very Poor";
      break;
    default:
      aqiStat = "unknown";
      break;
  }

  return aqiStat;
};

const WeatherIcon = ({ iconCode }: { iconCode: string }) => {
  let imagePath;

  switch (iconCode) {
    case "01d":
      return <WiDaySunny color="yellow" className="weather-item-icon" />;
    case "01n":
      return <WiNightClear color="yellow" className="weather-item-icon" />;
    case "02d":
      return <WiDayCloudy color="yellow" className="weather-item-icon" />;
    case "02n":
      return <WiNightCloudy color="yellow" className="weather-item-icon" />;
    case "03d":
    case "03n":
      return <WiDayCloudyGusts color="yellow" className="weather-item-icon" />;
    case "04d":
    case "04n":
      return <WiCloudy color="yellow" className="weather-item-icon" />;
    case "09d":
      return <WiDayShowers color="yellow" className="weather-item-icon" />;
    case "09n":
      return <WiNightShowers color="yellow" className="weather-item-icon" />;
    case "10d":
      return <WiDayRain color="yellow" className="weather-item-icon" />;
    case "10n":
      return <WiNightRain color="yellow" className="weather-item-icon" />;
    case "11d":
      return <WiDayThunderstorm color="yellow" className="weather-item-icon" />;
    case "11n":
      return (
        <WiNightThunderstorm color="yellow" className="weather-item-icon" />
      );
    case "13d":
    case "13n":
      return <WiSnow color="yellow" className="weather-item-icon" />;
    case "50d":
      return <WiDayFog color="yellow" className="weather-item-icon" />;
    case "50n":
      return <WiNightFog color="yellow" className="weather-item-icon" />;
    default:
      return (
        <WiNightThunderstorm color="yellow" className="weather-item-icon" />
      );
  }
};

interface HeroProps {
  defaultCity: string;
}

const Hero: React.FC<HeroProps> = ({ defaultCity }) => {
  const [weatherData, setWeatherData] = useState<any>(null);

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
          <div className="hero max-w-4xl">
            <div className="forecast-container">
              <div className="forecast text-black">Forecast</div>
            </div>

            <div className="image-container">
              <WeatherLogo iconCode={weatherData[0].weather[0].icon} />
            </div>
            <div className="curr-temp">
              <span className="big-temp">
                {parseInt(weatherData[0].main.temp)}
                <sup className="degree text-stone-400">°</sup>
              </span>

              <p className="we-stat text-stone-400">
                {weatherData[0].weather[0].description}
              </p>
            </div>

            <div className="flex flex-wrap we-data">
              <div className="w-1/2 ">
                <div className="p-4 temp-det">
                  <div className="temp-det-temp temp-det-one">
                    {parseInt(weatherData[0].main.temp)}°
                  </div>
                  <div className="temp-l-h">
                    <p className="temp-high">
                      H: {parseInt(weatherData[0].main.temp_max)}° C
                    </p>
                    <p className="temp-low">
                      L: {parseInt(weatherData[0].main.temp_min)}° C
                    </p>
                  </div>
                </div>
              </div>

              <div className="we-deta-one aqi-uvi w-1/2 p-4 ">
                <div className="aqi">
                  AIR QUALITY {weatherData[2].list[0].main.aqi}0 <br />{" "}
                  {aqiStatus(weatherData[2].list[0].main.aqi)}
                </div>
                <div className="uvi">
                  VISIBILITY <br /> {weatherData[0].visibility} Meters
                </div>
              </div>
            </div>

            <hr className="h-px bg-gray-800 border-0 m-4" />

            <div className="weather-card p-2">
              {weatherData[1].list
                .slice(0, 12)
                .map((element: any, index: any) => (
                  <div key={index} className="weather-item p-2 one ">
                    <div className="weather-card-temp text-center">
                      {parseInt(element.main.temp)}°
                    </div>
                    <div className="weather-card-img">
                      <WeatherIcon
                        iconCode={element.weather[0].icon}
                      ></WeatherIcon>
                    </div>
                    <div className="weather-card-time text-center">
                      {element.dt_txt.split(" ")[1].substring(0, 5)}
                    </div>
                  </div>
                ))}
            </div>

            <hr className="h-px bg-gray-800 border-0 m-4" />

            <div className=" flex flex-wrap">
              <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 pt-4 pb-2 pl-4 pr-2 in-data air-quality-con">
                <div className="inside-data text-left">
                  <p className="inside-data-text">
                    AIR QUALITY <br />
                    <b>{aqiStatus(weatherData[2].list[0].main.aqi)}</b>
                  </p>
                  <Image
                    src={AirQuality}
                    alt="air quality logo"
                    className="inside-data-stat-image-sm air-quality"
                  ></Image>
                  <p className="inside-data-stat text-left">
                    {" "}
                    <b>PM 2.5: {weatherData[2].list[0].components.pm2_5}</b>
                  </p>
                </div>
              </div>
              <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 pt-4 pb-2 pl-2 pr-4 in-data humidity">
                <div className="inside-data text-left">
                  <p className="inside-data-text">HUMIDITY</p>
                  <div className="outer-circle">
                    <div
                      className="inner-circle"
                      style={{
                        width: `${weatherData[0].main.humidity}%`,
                        height: `${weatherData[0].main.humidity}%`,
                      }}
                    ></div>
                  </div>
                  <p className="inside-data-stat text-left">
                    <b>{weatherData[0].main.humidity}%</b>
                  </p>
                </div>
              </div>
              <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 pt-2 pb-2 pl-4 pr-2 in-data wind-speed">
                <div className="inside-data text-left">
                  <p className="inside-data-text">WIND SPEED</p>
                  <Image
                    src={WindSpeed}
                    alt="wind speed logo"
                    className="inside-data-stat-image wind-speed-img"
                  ></Image>
                  <p className="inside-data-stat text-left">
                    <b>{weatherData[0].wind.speed} KM/PH</b>
                  </p>
                </div>
              </div>
              <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 pt-2 pb-2 pl-2 pr-4 in-data pressure">
                <div className="inside-data text-left">
                  <p className="inside-data-text">PRESSURE</p>
                  <Image
                    src={Pressure}
                    alt="pressure logo"
                    className="inside-data-stat-image uv-index"
                  ></Image>
                  <p className="inside-data-stat text-left">
                    <b>{weatherData[0].main.pressure} hPa</b>
                  </p>
                </div>
              </div>
              <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 pt-2 pb-4 pl-4 pr-2 in-data sunset">
                <div className="inside-data text-left">
                  <p className="inside-data-text">SUNSET</p>
                  <Image
                    src={Sunset}
                    alt="sunset logo"
                    className="inside-data-stat-image"
                  ></Image>
                  <p className="inside-data-stat text-left">
                    <b>
                      {formatTime(new Date(weatherData[0].sys.sunset * 1000))}
                    </b>
                  </p>
                </div>
              </div>
              <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 pt-2 pb-4 pl-2 pr-4 in-data">
                <div className="inside-data text-center transparent end-feels ">
                  <div className="p-4 feels-like-det ">
                    <div className="feels-like temp-high">FEELS LIKE</div>
                    <div className="temp-det-temp feels-like-det-one">
                      {parseInt(weatherData[0].main.feels_like)}°
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="loading-beg">Loading...</p>
      )}
    </>
  );
};

export default Hero;
