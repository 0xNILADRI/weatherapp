import Image from "next/image";
import { aqiStatus } from "@/utils/data";
import Sunset from "@/public/weather-icons/sunset.png";
import WindSpeed from "@/public/weather-icons/wind-speed.png";
import AirQuality from "@/public/weather-icons/air-quality.png";
import Pressure from "@/public/weather-icons/pressure.png";

function InformationCards({ dataParent }: { dataParent: any }) {
  function formatTime(x: Date) {
    const hours = x.getHours();
    const minutes = x.getMinutes();
    return `${hours}:${minutes}`;
  }
  return (
    <div>
      <div className=" flex flex-wrap">
        <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 pt-4 pb-2 pl-4 pr-2 in-data air-quality-con">
          <div className="inside-data text-left">
            <p className="inside-data-text">
              AIR QUALITY <br />
              <b>{aqiStatus(dataParent[2].list[0].main.aqi)}</b>
            </p>
            <Image
              src={AirQuality}
              alt="air quality logo"
              className="inside-data-stat-image-sm air-quality"
            ></Image>
            <p className="inside-data-stat text-left">
              {" "}
              <b>PM 2.5: {dataParent[2].list[0].components.pm2_5}</b>
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
                  width: `${dataParent[0].main.humidity}%`,
                  height: `${dataParent[0].main.humidity}%`,
                }}
              ></div>
            </div>
            <p className="inside-data-stat text-left">
              <b>{dataParent[0].main.humidity}%</b>
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
              <b>{dataParent[0].wind.speed} KM/PH</b>
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
              <b>{dataParent[0].main.pressure} hPa</b>
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
              <b>{formatTime(new Date(dataParent[0].sys.sunset * 1000))}</b>
            </p>
          </div>
        </div>
        <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 pt-2 pb-4 pl-2 pr-4 in-data">
          <div className="inside-data text-center transparent end-feels ">
            <div className="p-4 feels-like-det ">
              <div className="feels-like temp-high">FEELS LIKE</div>
              <div className="temp-det-temp feels-like-det-one">
                {parseInt(dataParent[0].main.feels_like)}°
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default InformationCards;
