"use client";

import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

import { District } from "@/entities/location/models/@types";

import { WeatherDetail } from "../@types";

import { useGetCurrentWeather } from "./useGetCurrentWeather";
import { useGetHourlyForecast } from "./useGetHourlyForecast";

export function useWeatherDetail(locationId: string): { data: WeatherDetail | null; isLoading: boolean } {
  // locationId normalization
  const decodedId = useMemo(() => {
    try {
      return decodeURIComponent(locationId).normalize("NFC");
    } catch {
      return locationId.normalize("NFC");
    }
  }, [locationId]);

  // 행정구역 좌표 정보 가져오기 (API 호출)
  const { data: district, isLoading: isDistrictLoading } = useQuery<District>({
    queryKey: ["location-detail", decodedId],
    queryFn: async () => {
      if (!decodedId) return null;
      const res = await fetch(`/api/location/detail?id=${encodeURIComponent(decodedId)}`);
      if (!res.ok) return null;
      return res.json();
    },
    enabled: !!decodedId,
  });

  const hasCoords = !!district?.lat && !!district?.lng;

  // 현재 날씨 요청
  const {
    data: current,
    isLoading: isCurrentLoading,
    isError: isCurrentError,
  } = useGetCurrentWeather({
    lat: district?.lat || 0,
    lon: district?.lng || 0,
  });

  // 시간별 예보 요청
  const {
    data: forecast,
    isLoading: isForecastLoading,
    isError: isForecastError,
  } = useGetHourlyForecast({
    lat: district?.lat || 0,
    lon: district?.lng || 0,
  });

  const isLoading = isDistrictLoading || isCurrentLoading || isForecastLoading;
  const isError = isCurrentError || isForecastError;

  // 데이터 가공 및 결합
  const combinedData: WeatherDetail | null = useMemo(() => {
    if (!hasCoords || !district || !current || !forecast || isError) return null;

    return {
      locationName: district.fullName,
      currentTemp: current.temp,
      lowTemp: forecast.daily?.[0]?.lowTemp ?? current.lowTemp,
      highTemp: forecast.daily?.[0]?.highTemp ?? current.highTemp,
      status: current.status,
      condition: current.description,
      conditionEn: current.conditionEn,
      humidity: current.humidity,
      windSpeed: current.windSpeed,
      uvIndex: "Moderate",
      sunrise: current.sunrise,
      sunset: current.sunset,
      visibility: current.visibility,
      pressure: current.pressure,
      rain: current.rain,
      feelsLike: current.feelsLike,
      date: new Date().toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
      }),
      hourlyForecast: forecast.hourly,
    };
  }, [hasCoords, district, current, forecast, isError]);

  return { data: combinedData, isLoading };
}
