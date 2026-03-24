import { useEffect } from "react";

import { useGetCurrentWeather, useGetLocation } from "@/entities";
import { toast } from "sonner";

type Params = {
  lat?: number;
  lon?: number;
  isGeoLocationLoading: boolean;
  geoLocationError?: string;
};

export const useWeatherInformation = ({ lat, lon, isGeoLocationLoading, geoLocationError }: Params) => {
  const { data: currentWeatherData, isPending, isError } = useGetCurrentWeather({ lat: lat!, lon: lon! });

  const { data: locationData, isPending: isLocationPending } = useGetLocation({ lat: lat!, lon: lon! });

  useEffect(() => {
    if (geoLocationError) {
      toast.error(geoLocationError);
    }
  }, [geoLocationError]);

  const isLoading = isGeoLocationLoading || isPending || isLocationPending;
  const isInformationError = isError || !!geoLocationError || (!currentWeatherData && !isLoading);

  return {
    currentWeatherData,
    locationData,
    isLoading,
    isError: isInformationError,
    geoLocationError,
  };
};
