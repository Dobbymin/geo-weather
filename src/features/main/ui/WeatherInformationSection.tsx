import { CurrentWeather, WeatherInformationTitle } from "../_components";

export const WeatherInformationSection = () => {
  return (
    <section aria-labelledby='weather-information'>
      <WeatherInformationTitle />
      <CurrentWeather />
    </section>
  );
};
