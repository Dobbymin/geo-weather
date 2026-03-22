import { FAVORITES_DETAIL_MOCK } from "../../data";
import { WeatherDetail } from "../@types";

export function useWeatherDetail(locationId: string): { data: WeatherDetail | null; isLoading: boolean } {
  const data = FAVORITES_DETAIL_MOCK[locationId] || FAVORITES_DETAIL_MOCK["seoul-jongno"];

  return { data, isLoading: false };
}
