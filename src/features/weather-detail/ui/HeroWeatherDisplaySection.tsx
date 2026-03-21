import { type WeatherStatus } from "@/entities/weather";

import { CurrentTemperature, DecorativeBackground, StatsFooter } from "../components";

const MOCK_WEATHER_DATA: {
  date: string;
  currentTemp: number;
  status: WeatherStatus;
  condition: string;
  conditionEn: string;
  humidity: number;
  windSpeed: number;
  uvIndex: string;
  lowTemp: number;
  highTemp: number;
} = {
  date: "Today, 24 May",
  currentTemp: 24,
  status: "RAIN",
  condition: "흐리고 비",
  conditionEn: "Rainy & Cloudy",
  humidity: 78,
  windSpeed: 12,
  uvIndex: "Moderate",
  lowTemp: 18,
  highTemp: 26,
};

export const HeroWeatherDisplaySection = () => {
  const data = MOCK_WEATHER_DATA;

  return (
    <section className='bg-card col-span-12 flex min-h-100 flex-col justify-between overflow-hidden rounded-[24px] p-8 lg:col-span-8'>
      <DecorativeBackground />
      <CurrentTemperature
        date={data.date}
        currentTemp={data.currentTemp}
        condition={data.condition}
        conditionEn={data.conditionEn}
        status={data.status}
      />
      <StatsFooter humidity={data.humidity} windSpeed={data.windSpeed} uvIndex={data.uvIndex} />
    </section>
  );
};
