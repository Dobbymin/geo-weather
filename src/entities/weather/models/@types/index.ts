export interface WeatherDetail {
  locationName: string;
  currentTemp: number;
  lowTemp: number;
  highTemp: number;
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
}

export interface HourlyForecastItem {
  time: string;
  temp: number;
  isPrecipitation?: boolean;
}
