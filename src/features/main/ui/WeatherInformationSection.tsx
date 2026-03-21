import { CurrentWeather, WeatherInformationTitle } from "../_components";

export const WeatherInformationSection = () => {
  return (
    <section aria-labelledby='current-weather-title'>
      <WeatherInformationTitle />
      <CurrentWeather />
    </section>
  );
};
