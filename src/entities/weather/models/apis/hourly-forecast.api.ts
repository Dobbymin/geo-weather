import { DailyForecastData, ForecastCityData, HourlyForecastData } from "../@types";

export interface HourlyForecastParams {
  lat: number;
  lon: number;
}

export interface HourlyForecastResponse {
  hourly: HourlyForecastData[];
  daily: DailyForecastData[];
  city: ForecastCityData;
}

export const getHourlyForecast = async ({ lat, lon }: HourlyForecastParams): Promise<HourlyForecastResponse> => {
  const res = await fetch(`/api/forecast?lat=${lat}&lon=${lon}`);

  if (!res.ok) throw new Error("예보 정보를 가져오는데 실패했습니다.");

  return res.json();
};
