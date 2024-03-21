import { WeatherLogo, aqiStatus } from "@/utils/data";
import TwentyFourHourForecast from "@/app/components/twentyFourHourForecast";
import InformationCards from "@/app/components/informationCards";

interface HeroProps {
  dataFromParent: any;
}

const Hero: React.FC<HeroProps> = ({ dataFromParent }) => {
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

            <TwentyFourHourForecast
              dataParent={dataFromParent}
            ></TwentyFourHourForecast>

            <hr className="h-px bg-gray-800 border-0 m-4" />

            <InformationCards dataParent={dataFromParent}></InformationCards>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Hero;
