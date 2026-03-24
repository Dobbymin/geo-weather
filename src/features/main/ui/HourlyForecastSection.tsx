"use client";

import { HourlyForecastList, HourlyForecastTitle } from "../_components";
import { useHourlyForecastSection } from "../_hooks/useHourlyForecastSection";

type Props = {
  lat?: number;
  lon?: number;
};

export const HourlyForecastSection = ({ lat, lon }: Props) => {
  const { isExpanded, handleToggleClick } = useHourlyForecastSection();

  return (
    <section aria-labelledby='hourly-forecast'>
      <HourlyForecastTitle isExpanded={isExpanded} onToggleClick={handleToggleClick} />
      <HourlyForecastList isExpanded={isExpanded} lat={lat} lon={lon} />
    </section>
  );
};
