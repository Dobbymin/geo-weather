import { HourlyForecastList, HourlyForecastTitle } from "../_components";

export const HourlyForecastSection = () => {
  return (
    <section aria-labelledby='hourly-forecast'>
      <HourlyForecastTitle />
      <HourlyForecastList />
    </section>
  );
};
