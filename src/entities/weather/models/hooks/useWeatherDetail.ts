import { WeatherDetail } from "../@types";

const MOCK_DETAIL_DATA: Record<string, WeatherDetail> = {
  "seoul-jongno": {
    locationName: "서울특별시 종로구",
    currentTemp: 12,
    lowTemp: 8,
    highTemp: 15,
    status: "CLEAR",
    condition: "맑음",
    conditionEn: "Clear Sky",
    humidity: 45,
    windSpeed: 8,
    uvIndex: "Low",
    sunrise: "06:12 AM",
    sunset: "06:45 PM",
    visibility: 20,
    pressure: 1018,
    date: "2026년 3월 19일 목요일",
    hourlyForecast: [
      { time: "14:00", temp: 14, status: "CLEAR" },
      { time: "15:00", temp: 15, status: "CLEAR" },
      { time: "16:00", temp: 14, status: "CLEAR" },
      { time: "17:00", temp: 13, status: "PARTLY_CLOUDY" },
      { time: "18:00", temp: 11, status: "CLOUDY" },
      { time: "19:00", temp: 10, status: "CLOUDY" },
      { time: "20:00", temp: 9, status: "CLOUDY" },
    ],
  },
  "suwon-yeongtong": {
    locationName: "경기도 수원시 영통구",
    currentTemp: 24,
    lowTemp: 18,
    highTemp: 26,
    status: "RAIN",
    condition: "흐리고 비",
    conditionEn: "Rainy & Cloudy",
    humidity: 78,
    windSpeed: 12,
    uvIndex: "Moderate",
    sunrise: "06:14 AM",
    sunset: "06:47 PM",
    visibility: 14.2,
    pressure: 1012,
    date: "2026년 3월 19일 목요일",
    hourlyForecast: [
      { time: "14:00", temp: 25, status: "RAIN" },
      { time: "15:00", temp: 26, status: "RAIN" },
      { time: "16:00", temp: 25, status: "THUNDERSTORM" },
      { time: "17:00", temp: 24, status: "RAIN" },
      { time: "18:00", temp: 23, status: "CLOUDY" },
      { time: "19:00", temp: 21, status: "CLOUDY" },
      { time: "20:00", temp: 20, status: "CLOUDY" },
    ],
  },
};

export function useWeatherDetail(locationId: string): { data: WeatherDetail | null; isLoading: boolean } {
  const data = MOCK_DETAIL_DATA[locationId] || MOCK_DETAIL_DATA["seoul-jongno"];

  return { data, isLoading: false };
}
