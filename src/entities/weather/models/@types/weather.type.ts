export type WeatherStatus = "CLEAR" | "CLOUDY" | "PARTLY_CLOUDY" | "RAIN" | "SNOW" | "THUNDERSTORM";

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
  hourlyForecast: HourlyForecastItem[];
};

export type HourlyForecastItem = {
  time: string;
  temp: number;
  status: WeatherStatus;
  isPrecipitation?: boolean;
};
