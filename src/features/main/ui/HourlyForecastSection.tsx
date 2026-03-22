"use client";

import { useState } from "react";

import { HourlyForecastList, HourlyForecastTitle } from "../_components";

export const HourlyForecastSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section aria-labelledby='hourly-forecast'>
      <HourlyForecastTitle isExpanded={isExpanded} onToggle={() => setIsExpanded((prev) => !prev)} />
      <HourlyForecastList isExpanded={isExpanded} />
    </section>
  );
};
