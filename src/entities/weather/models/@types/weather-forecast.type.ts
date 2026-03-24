import type { WeatherStatus } from "./weather-status.type";
import { Clouds, ForecastSys, MainWeather, Precipitation, WeatherCondition, Wind } from "./weather.type";

/**
 * OpenWeatherMap API 원본 응답 타입
 * */

export type ForecastItem = {
  dt: number;
  main: MainWeather;
  weather: WeatherCondition[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  rain?: Precipitation;
  snow?: Precipitation;
  sys: ForecastSys;
  dt_txt: string;
};

export type ForecastCity = {
  id: number;
  name: string;
  coord: { lat: number; lon: number };
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
};

export type ForecastResponse = {
  cod: string;
  message: number;
  cnt: number;
  list: ForecastItem[];
  city: ForecastCity;
};

/**
 * 클라이언트에서 사용하는 가공 타입
 * */

export type HourlyForecastData = {
  dt: number;
  time: string;
  date: string;
  temp: number;
  conditionEn: string;
  status: WeatherStatus;
  pop: number;
};

export type DailyForecastData = {
  date: string;
  lowTemp: number;
  highTemp: number;
};
