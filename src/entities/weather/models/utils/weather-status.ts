import { WeatherStatus } from "../@types";

export const mapWeatherIdToStatus = (id: number): WeatherStatus => {
  if (id >= 200 && id < 300) return "THUNDERSTORM";
  if (id >= 300 && id < 600) return "RAIN";
  if (id >= 600 && id < 700) return "SNOW";
  if (id >= 700 && id < 800) return "CLOUDY";
  if (id === 800) return "CLEAR";
  if (id === 801 || id === 802) return "PARTLY_CLOUDY";
  if (id >= 803 && id < 900) return "CLOUDY";
  if (id >= 900 && id <= 902) return "STORM";
  if (id >= 951 && id <= 962) return "WINDY";
  return "CLEAR";
};
