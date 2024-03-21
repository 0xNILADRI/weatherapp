import axios from "axios";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast";
const AQI_URL = "https://api.openweathermap.org/data/2.5/air_pollution";
const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;

let cachedData: any = null;

export const fetchWeather = async (city: string) => {
  const result = [];
  try {
    const response = await axios.get(
      `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    result.push(response.data);

    const lon = response.data.coord.lon;
    const lat = response.data.coord.lat;

    const forecast = await axios.get(
      `${FORECAST_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    result.push(forecast.data);

    const aqi = await axios.get(
      `${AQI_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    result.push(aqi.data);

    cachedData = result;
    return result;
  } catch (error) {
    console.error("Failed to fetch weather data: ");
    if (cachedData) {
      return cachedData;
    } else {
      return null;
    }
  }
};
