"use client";

import { useEffect } from "react";

import { useGetCurrentWeather, useGetLocation } from "@/entities";
import { Skeleton } from "@/shared";
import { toast } from "sonner";

import { CurrentWeather, WeatherInformationTitle } from "../_components";

type Props = {
  lat?: number;
  lon?: number;
  isGeoLocationLoading: boolean;
  geoLocationError?: string;
};

export const WeatherInformationSection = ({ lat, lon, isGeoLocationLoading, geoLocationError }: Props) => {
  const { data: currentWeatherData, isLoading, isError } = useGetCurrentWeather({ lat: lat!, lon: lon! });

  const { data: locationData } = useGetLocation({ lat: lat!, lon: lon! });

  useEffect(() => {
    if (geoLocationError) {
      toast.error(geoLocationError);
    }
  }, [geoLocationError]);

  if (isLoading || isGeoLocationLoading) {
    return (
      <section aria-labelledby='weather-information'>
        <WeatherInformationTitle />
        <Skeleton className='h-59 w-full rounded-[40px] md:h-69' />
      </section>
    );
  }

  if (isError) {
    return (
      <section aria-labelledby='weather-information'>
        <WeatherInformationTitle />
        <div className='flex h-59 w-full items-center justify-center rounded-[40px] border border-dashed border-muted-foreground/20 bg-card/50 text-muted-foreground md:h-69'>
          <p className='text-sm font-medium'>날씨 정보를 불러올 수 없습니다.</p>
        </div>
      </section>
    );
  }

  if (!currentWeatherData) {
    return (
      <section aria-labelledby='weather-information'>
        <WeatherInformationTitle />
        <Skeleton className='h-59 w-full rounded-[40px] md:h-69' />
      </section>
    );
  }

  return (
    <section aria-labelledby='weather-information'>
      <WeatherInformationTitle />
      <CurrentWeather
        name={locationData?.locationName || ""}
        temp={currentWeatherData.temp}
        status={currentWeatherData.status}
        description={currentWeatherData.description}
        lowTemp={currentWeatherData.lowTemp}
        highTemp={currentWeatherData.highTemp}
      />
    </section>
  );
};
