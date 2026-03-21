import { Cloud, CloudLightning, CloudRain, CloudSnow, CloudSun, Sun } from "lucide-react";

import { WeatherStatus } from "../@types";

/**
 * 날씨 상태(WeatherStatus)에 따른 Lucide 아이콘과 색상 정보를 반환합니다.
 */
export const getWeatherIcon = (status: WeatherStatus) => {
  switch (status) {
    case "CLEAR":
      return { icon: Sun, color: "text-orange-400" };
    case "CLOUDY":
      return { icon: Cloud, color: "text-gray-400" };
    case "PARTLY_CLOUDY":
      return { icon: CloudSun, color: "text-yellow-400" };
    case "RAIN":
      return { icon: CloudRain, color: "text-blue-400" };
    case "SNOW":
      return { icon: CloudSnow, color: "text-blue-100" };
    case "THUNDERSTORM":
      return { icon: CloudLightning, color: "text-purple-400" };
    default:
      return { icon: Sun, color: "text-orange-400" };
  }
};
