"use client";

import { useQuery } from "@tanstack/react-query";

import { HourlyForecastParams, getHourlyForecast } from "../apis";

export const useGetHourlyForecast = ({ lat, lon }: HourlyForecastParams) => {
  return useQuery({
    queryKey: ["hourlyForecast", lat, lon],
    queryFn: () => getHourlyForecast({ lat, lon }),

    staleTime: 1000 * 60 * 60, // 1시간
    enabled: !!lat && !!lon,
  });
};
