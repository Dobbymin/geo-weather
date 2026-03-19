import { WeatherDetail } from "../@types";

export function useWeatherDetail(locationId: string): { data: WeatherDetail | null; isLoading: boolean } {
  const decodedId = decodeURIComponent(locationId).replace(/-/g, " ");

  const mockData: WeatherDetail = {
    locationName: decodedId || "경기도 수원시 영통구",
    currentTemp: 24,
    lowTemp: 18,
    highTemp: 26,
    condition: "흐리고 비",
    conditionEn: "Rainy & Cloudy",
    humidity: 78,
    windSpeed: 12,
    uvIndex: "Moderate",
    sunrise: "05:24 AM",
    sunset: "07:38 PM",
    visibility: 14.2,
    pressure: 1012,
    date: "Today, 24 May",
    hourlyForecast: [
      { time: "14:00", temp: 22 },
      { time: "15:00", temp: 23 },
      { time: "16:00", temp: 24 },
      { time: "17:00", temp: 23 },
      { time: "18:00", temp: 21 },
      { time: "19:00", temp: 19 },
      { time: "20:00", temp: 18 },
    ],
  };

  return { data: mockData, isLoading: false };
}
