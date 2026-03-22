import { FAVORITES_DETAIL_MOCK } from "../../data";
import { WeatherDetail } from "../@types";

export function useWeatherDetail(locationId: string): { data: WeatherDetail | null; isLoading: boolean } {
  const decodedId = decodeURIComponent(locationId);
  const data = FAVORITES_DETAIL_MOCK[decodedId] || null;

  return { data, isLoading: false };
}
