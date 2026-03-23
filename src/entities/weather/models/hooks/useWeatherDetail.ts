"use client";

import { useMemo } from "react";

import { KOREA_DISTRICTS_WITH_COORDS } from "@/entities/location/models/constants/korea-districts-with-coords";

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

  // 행정구역 좌표 정보 찾기 (ID로 먼저 찾고, 없으면 fullName으로 검색)
  const district = useMemo(() => {
    const foundById = KOREA_DISTRICTS_WITH_COORDS.find((d) => d.id === decodedId);
    if (foundById) return foundById;

    // ID 매칭 실패 시 이름으로 한 번 더 시도 (URL 인코딩/디코딩 변수 대응)
    return KOREA_DISTRICTS_WITH_COORDS.find((d) => d.fullName === decodedId.replace(/-/g, " "));
  }, [decodedId]);

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

  const isLoading = isCurrentLoading || isForecastLoading;
  const isError = isCurrentError || isForecastError;

  // 데이터 가공 및 결합
  const combinedData: WeatherDetail | null = useMemo(() => {
    if (!hasCoords || !current || !forecast || isError) return null;

    return {
      locationName: district.fullName,
      currentTemp: current.temp,
      lowTemp: current.lowTemp,
      highTemp: current.highTemp,
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
      date: new Date().toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
      }),
      hourlyForecast: forecast.hourly,
    };
  }, [hasCoords, current, forecast, isError, district]);

  return { data: combinedData, isLoading };
}
