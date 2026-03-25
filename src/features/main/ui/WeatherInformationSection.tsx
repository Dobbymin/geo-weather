"use client";

import { useIsHydrated } from "@/shared";

import { CurrentWeather, WeatherInformationTitle } from "../_components";
import { useWeatherInformation } from "../_hooks";

type Props = {
  lat?: number;
  lon?: number;
  isGeoLocationLoading: boolean;
  geoLocationError?: string;
};

export const WeatherInformationSection = ({ lat, lon, isGeoLocationLoading, geoLocationError }: Props) => {
  const isHydrated = useIsHydrated();
  const { currentWeatherData, locationData, isLoading, isError } = useWeatherInformation({
    lat,
    lon,
    isGeoLocationLoading,
    geoLocationError,
  });

  if (isError) {
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

  // 서버와 클라이언트의 첫 렌더링을 완전히 일치시킵니다.
  // CurrentWeather 내부에서 isLoading을 처리하더라도,
  // 구조적 일관성을 위해 마운트 전에는 가장 단순한 형태를 유지하거나
  // 혹은 동일한 컴포넌트를 isLoading=true로 렌더링합니다.
  return (
    <section aria-labelledby='weather-information'>
      <WeatherInformationTitle />
      <CurrentWeather
        isLoading={!isHydrated || isLoading}
        name={locationData?.locationName}
        temp={currentWeatherData?.temp}
        status={currentWeatherData?.status}
        description={currentWeatherData?.description}
        lowTemp={currentWeatherData?.lowTemp}
        highTemp={currentWeatherData?.highTemp}
      />
    </section>
  );
};
