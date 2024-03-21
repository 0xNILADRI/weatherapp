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

export const WeatherLogo = ({ iconCode }: { iconCode: string }) => {
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

export const aqiStatus = (aqi_val: number) => {
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

export const WeatherIcon = ({ iconCode }: { iconCode: string }) => {
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
