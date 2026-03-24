"use client";

import { useState } from "react";

import { HourlyForecastList, HourlyForecastTitle } from "../_components";

type Props = {
  lat?: number;
  lon?: number;
};

export const HourlyForecastSection = ({ lat, lon }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section aria-labelledby='hourly-forecast'>
      <HourlyForecastTitle isExpanded={isExpanded} onToggleClick={() => setIsExpanded((prev) => !prev)} />
      <HourlyForecastList isExpanded={isExpanded} lat={lat} lon={lon} />
    </section>
  );
};
