import { useState } from "react";

export const useHourlyForecastSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleClick = () => {
    setIsExpanded((prev) => !prev);
  };

  return {
    isExpanded,
    handleToggleClick,
  };
};
