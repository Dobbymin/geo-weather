import { HourlyForecastList, HourlyForecastTitle } from "../_components";

export const HourlyForecastSection = () => {
  return (
    <section aria-labelledby='hourly-forecast-title'>
      <HourlyForecastTitle />
      <HourlyForecastList />
    </section>
  );
};
