import Image from "next/image";
import { WeatherLogo, aqiStatus, WeatherIcon } from "@/utils/data";

import Sunset from "@/public/weather-icons/sunset.png";
import WindSpeed from "@/public/weather-icons/wind-speed.png";
import AirQuality from "@/public/weather-icons/air-quality.png";
import Pressure from "@/public/weather-icons/pressure.png";

interface HeroProps {
  dataFromParent: any;
}

const Hero: React.FC<HeroProps> = ({ dataFromParent }) => {
  function formatTime(x: Date) {
    const hours = x.getHours();
    const minutes = x.getMinutes();
    return `${hours}:${minutes}`;
  }

  return (
    <>
      {dataFromParent ? (
        <div>
          <div className="hero max-w-4xl">
            <div className="forecast-container">
              <div className="forecast text-black">Forecast</div>
            </div>

            <div className="image-container">
              <WeatherLogo iconCode={dataFromParent[0].weather[0].icon} />
            </div>
            <div className="curr-temp">
              <span className="big-temp">
                {parseInt(dataFromParent[0].main.temp)}
                <sup className="degree text-stone-400">°</sup>
              </span>

              <p className="we-stat text-stone-400">
                {dataFromParent[0].weather[0].description}
              </p>
            </div>

            <div className="flex flex-wrap we-data">
              <div className="w-1/2 ">
                <div className="p-4 temp-det">
                  <div className="temp-det-temp temp-det-one">
                    {parseInt(dataFromParent[0].main.temp)}°
                  </div>
                  <div className="temp-l-h">
                    <p className="temp-high">
                      H: {parseInt(dataFromParent[0].main.temp_max)}° C
                    </p>
                    <p className="temp-low">
                      L: {parseInt(dataFromParent[0].main.temp_min)}° C
                    </p>
                  </div>
                </div>
              </div>

              <div className="we-deta-one aqi-uvi w-1/2 p-4 ">
                <div className="aqi">
                  AIR QUALITY {dataFromParent[2].list[0].main.aqi}0 <br />{" "}
                  {aqiStatus(dataFromParent[2].list[0].main.aqi)}
                </div>
                <div className="uvi">
                  VISIBILITY <br /> {dataFromParent[0].visibility} Meters
                </div>
              </div>
            </div>

            <hr className="h-px bg-gray-800 border-0 m-4" />

            <div className="weather-card p-2">
              {dataFromParent[1].list
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
                    <b>{aqiStatus(dataFromParent[2].list[0].main.aqi)}</b>
                  </p>
                  <Image
                    src={AirQuality}
                    alt="air quality logo"
                    className="inside-data-stat-image-sm air-quality"
                  ></Image>
                  <p className="inside-data-stat text-left">
                    {" "}
                    <b>PM 2.5: {dataFromParent[2].list[0].components.pm2_5}</b>
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
                        width: `${dataFromParent[0].main.humidity}%`,
                        height: `${dataFromParent[0].main.humidity}%`,
                      }}
                    ></div>
                  </div>
                  <p className="inside-data-stat text-left">
                    <b>{dataFromParent[0].main.humidity}%</b>
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
                    <b>{dataFromParent[0].wind.speed} KM/PH</b>
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
                    <b>{dataFromParent[0].main.pressure} hPa</b>
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
                      {formatTime(
                        new Date(dataFromParent[0].sys.sunset * 1000)
                      )}
                    </b>
                  </p>
                </div>
              </div>
              <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 pt-2 pb-4 pl-2 pr-4 in-data">
                <div className="inside-data text-center transparent end-feels ">
                  <div className="p-4 feels-like-det ">
                    <div className="feels-like temp-high">FEELS LIKE</div>
                    <div className="temp-det-temp feels-like-det-one">
                      {parseInt(dataFromParent[0].main.feels_like)}°
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Hero;
