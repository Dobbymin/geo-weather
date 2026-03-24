"use client";

import { useQuery } from "@tanstack/react-query";

import { CurrentWeatherParams, getCurrentWeather } from "../apis";

export const useGetCurrentWeather = ({ lat, lon }: CurrentWeatherParams) => {
  return useQuery({
    queryKey: ["current-weather", lat, lon],
    queryFn: () => getCurrentWeather({ lat: lat!, lon: lon! }),
    enabled: !!lat && !!lon,
    staleTime: 1000 * 60 * 10, // 10분
    gcTime: 1000 * 60 * 15, // 15분
  });
};
