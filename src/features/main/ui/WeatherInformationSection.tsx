"use client";

import { useGetCurrentWeather } from "@/entities";
import { Skeleton } from "@/shared";

import { CurrentWeather, WeatherInformationTitle } from "../_components";

export const WeatherInformationSection = () => {
  const { data: currentWeatherData, isLoading, isError } = useGetCurrentWeather({ lat: 37.573, lon: 126.979 }); // 서울특별시 종로구 기준

  if (isLoading) {
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
        <div className='flex h-59 w-full items-center justify-center rounded-[40px] border border-dashed border-muted-foreground/20 bg-card/50 text-muted-foreground md:h-69'>
          <p className='text-sm font-medium'>날씨 데이터가 존재하지 않습니다.</p>
        </div>
      </section>
    );
  }

  return (
    <section aria-labelledby='weather-information'>
      <WeatherInformationTitle />
      <CurrentWeather data={currentWeatherData} />
    </section>
  );
};
