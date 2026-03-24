import { useEffect, useMemo } from "react";

import { useGetHourlyForecast } from "@/entities";
import { toast } from "sonner";

type Params = {
  isExpanded: boolean;
  lat?: number;
  lon?: number;
};

export const useHourlyForecastList = ({ isExpanded, lat, lon }: Params) => {
  const { data: hourlyForecastData, isPending, isError } = useGetHourlyForecast({ lat: lat!, lon: lon! });

  const displayedForecast = useMemo(() => {
    if (!hourlyForecastData) return [];
    if (isExpanded) return hourlyForecastData.hourly;

    const uniqueDates = Array.from(new Set(hourlyForecastData.hourly.map((item) => item.date)));
    const todayAndTomorrow = uniqueDates.slice(0, 2);

    return hourlyForecastData.hourly.filter((item) => todayAndTomorrow.includes(item.date));
  }, [hourlyForecastData, isExpanded]);

  useEffect(() => {
    if (isError) {
      toast.error("예보 정보를 가져오는데 실패했습니다.");
    } else if (!isPending && (!hourlyForecastData || hourlyForecastData.hourly.length === 0)) {
      toast.warning("예보 정보를 찾을 수 없습니다.");
    }
  }, [isError, isPending, hourlyForecastData]);

  return {
    displayedForecast,
    isPending,
    isError: isError || (!isPending && (!hourlyForecastData || hourlyForecastData.hourly.length === 0)),
  };
};
