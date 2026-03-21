import { CurrentTemperature, DecorativeBackground, StatsFooter } from "../components";

const MOCK_WEATHER_DATA = {
  date: "Today, 24 May",
  currentTemp: 24,
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
    <section className='relative col-span-12 flex min-h-100 flex-col justify-between overflow-hidden rounded-[12px] bg-white p-8 lg:col-span-8'>
      <DecorativeBackground />
      <CurrentTemperature
        date={data.date}
        currentTemp={data.currentTemp}
        condition={data.condition}
        conditionEn={data.conditionEn}
      />
      <StatsFooter humidity={data.humidity} windSpeed={data.windSpeed} uvIndex={data.uvIndex} />
    </section>
  );
};
