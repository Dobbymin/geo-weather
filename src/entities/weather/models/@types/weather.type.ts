import { HourlyForecastData } from "./weather-forecast.type";
import { WeatherStatus } from "./weather-status.type";

/** 날씨 상태 */
export type WeatherCondition = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

/** 기온 및 기압 정보 */
export type MainWeather = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
};

/** 바람 정보 */
export type Wind = {
  speed: number;
  deg: number;
  gust: number;
};

/** 구름 정보 */
export type Clouds = {
  all: number;
};

/** 강수 정보 */
export type Precipitation = {
  "3h": number;
};

/** sys 정보 */
export type ForecastSys = {
  pod: "d" | "n";
};

export type WeatherDetail = {
  locationName: string;
  currentTemp: number;
  lowTemp: number;
  highTemp: number;
  status: WeatherStatus;
  condition: string;
  conditionEn: string;
  humidity: number;
  windSpeed: number;
  uvIndex: string;
  sunrise: string;
  sunset: string;
  visibility: number;
  pressure: number;
  date: string;
  hourlyForecast: HourlyForecastData[];
  rain: number | null;
  feelsLike: number;
};
