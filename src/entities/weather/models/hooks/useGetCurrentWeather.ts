"use client";

import { useQuery } from "@tanstack/react-query";

import { CurrentWeatherParams, getCurrentWeather } from "../apis";

export const useGetCurrentWeather = ({ lat, lon }: CurrentWeatherParams) => {
  return useQuery({
    queryKey: ["current-weather", lat, lon],
    queryFn: () => getCurrentWeather({ lat, lon }),
    enabled: !!lat && !!lon,
  });
};
