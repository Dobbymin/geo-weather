import { useMemo } from "react";

import { type WeatherDetail } from "@/entities";
import { ChartConfig } from "@/shared";

export const useHourlyForecastChart = (data?: WeatherDetail | null) => {
  const chartConfig = useMemo(
    () =>
      ({
        temp: {
          label: "기온",
          color: "#b8c5ff",
        },
        pop: {
          label: "강수",
          color: "#c4efff",
        },
      }) satisfies ChartConfig,
    [],
  );

  const chartData = useMemo(() => {
    if (!data) return [];
    return data.hourlyForecast.map((item) => {
      const timeParts = item.time.split(" ");
      const ampm = timeParts[0];
      const hour = timeParts[1]?.split(":")[0];
      const day = item.date.split("/")[1];

      return {
        ...item,
        displayTime: `${item.time}`,
        ampm,
        hour,
        day,
      };
    });
  }, [data]);

  const chartMinWidth = useMemo(() => {
    if (!data) return 0;
    return data.hourlyForecast.length * 44 + 32;
  }, [data]);

  return {
    chartConfig,
    chartData,
    chartMinWidth,
  };
};
