import { WeatherIcon } from "@/utils/data";

function TwentyFourHourForecast({ dataParent }: { dataParent: any }) {
  return (
    <div className="weather-card p-2">
      {dataParent[1].list.slice(0, 12).map((element: any, index: any) => (
        <div key={index} className="weather-item p-2 one ">
          <div className="weather-card-temp text-center">
            {parseInt(element.main.temp)}°
          </div>
          <div className="weather-card-img">
            <WeatherIcon iconCode={element.weather[0].icon}></WeatherIcon>
          </div>
          <div className="weather-card-time text-center">
            {element.dt_txt.split(" ")[1].substring(0, 5)}
          </div>
        </div>
      ))}
    </div>
  );
}
export default TwentyFourHourForecast;
