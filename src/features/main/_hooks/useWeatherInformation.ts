import { useEffect } from "react";

import { useGetCurrentWeather, useGetHourlyForecast, useGetLocation } from "@/entities";
import { toast } from "sonner";

type Params = {
  lat?: number;
  lon?: number;
  isGeoLocationLoading: boolean;
  geoLocationError?: string;
};

export const useWeatherInformation = ({ lat, lon, isGeoLocationLoading, geoLocationError }: Params) => {
  const { data: currentWeatherData, isPending, isError } = useGetCurrentWeather({ lat: lat!, lon: lon! });
  const { data: forecastData, isPending: isForecastPending } = useGetHourlyForecast({ lat: lat!, lon: lon! });

  const { data: locationData, isPending: isLocationPending } = useGetLocation({ lat: lat!, lon: lon! });

  useEffect(() => {
    if (geoLocationError) {
      toast.error(geoLocationError);
    }
  }, [geoLocationError]);

  const mergedWeatherData = currentWeatherData
    ? {
        ...currentWeatherData,
        lowTemp: forecastData?.daily?.[0]?.lowTemp ?? currentWeatherData.lowTemp,
        highTemp: forecastData?.daily?.[0]?.highTemp ?? currentWeatherData.highTemp,
      }
    : currentWeatherData;

  const isLoading = isGeoLocationLoading || isPending || isLocationPending || isForecastPending;
  const isInformationError = isError || !!geoLocationError || (!currentWeatherData && !isLoading);

  return {
    currentWeatherData: mergedWeatherData,
    locationData,
    isLoading,
    isError: isInformationError,
    geoLocationError,
  };
};
