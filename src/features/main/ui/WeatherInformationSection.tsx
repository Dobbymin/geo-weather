"use client";

import { useEffect } from "react";

import { useGetCurrentWeather, useGetLocation } from "@/entities";
import { Skeleton } from "@/shared";
import { toast } from "sonner";

import { Spinner } from "@/shared/components/ui/spinner";

import { CurrentWeather, WeatherInformationTitle } from "../_components";

type Props = {
  lat?: number;
  lon?: number;
  isGeoLocationLoading: boolean;
  geoLocationError?: string;
};

export const WeatherInformationSection = ({ lat, lon, isGeoLocationLoading, geoLocationError }: Props) => {
  const { data: currentWeatherData, isPending, isError } = useGetCurrentWeather({ lat: lat!, lon: lon! });

  const { data: locationData, isPending: isLocationPending } = useGetLocation({ lat: lat!, lon: lon! });

  useEffect(() => {
    if (geoLocationError) {
      toast.error(geoLocationError);
    }
  }, [geoLocationError]);

  if (isGeoLocationLoading) {
    return (
      <section aria-labelledby='weather-information'>
        <WeatherInformationTitle />
        <div className='relative'>
          <Skeleton className='h-59 w-full rounded-[40px] md:h-69' />
          <div className='absolute inset-0 flex flex-col items-center justify-center gap-2'>
            <Spinner size={32} />
            <p className='text-sm font-medium text-muted-foreground'>위치 정보를 가져오는 중입니다...</p>
          </div>
        </div>
      </section>
    );
  }

  if (geoLocationError || isError || !currentWeatherData) {
    return (
      <section aria-labelledby='weather-information'>
        <WeatherInformationTitle />
        <div className='flex h-59 w-full flex-col items-center justify-center gap-4 rounded-[40px] border border-dashed border-muted-foreground/20 bg-card/50 px-6 text-center text-muted-foreground md:h-69'>
          <p className='text-sm font-medium'>현재 날씨 정보를 불러올 수 없습니다.</p>
          <p className='text-xs opacity-70'>위치 정보 권한을 확인하거나 직접 지역을 검색해주세요.</p>
        </div>
      </section>
    );
  }

  if (isPending || isLocationPending || !locationData) {
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
