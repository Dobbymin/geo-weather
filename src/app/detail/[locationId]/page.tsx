"use client";

import { use } from "react";

import { useWeatherDetail } from "@/entities";
import {
  DynamicContentSection,
  HeroWeatherDisplaySection,
  HourlyForecastWidgetSection,
  WeatherRangeAlertsAside,
} from "@/features";

type Props = {
  params: Promise<{ locationId: string }>;
};

export default function DetailPage({ params }: Props) {
  const { locationId } = use(params);
  const { data, isLoading } = useWeatherDetail(locationId);

  if (isLoading) {
    return (
      <div className='flex min-h-[60vh] items-center justify-center bg-background'>
        <p className='animate-pulse font-medium text-muted-foreground'>Loading weather data...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className='flex min-h-[60vh] flex-col items-center justify-center gap-4 bg-background'>
        <p className='text-lg font-semibold text-foreground'>해당 장소의 정보가 제공되지 않습니다.</p>
        <button
          onClick={() => window.history.back()}
          className='rounded-full bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90'
        >
          뒤로 가기
        </button>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-background'>
      <div className='flex flex-col gap-6 pb-16 md:gap-12 md:pb-32'>
        <div className='grid grid-cols-12 gap-4 md:gap-8'>
          <HeroWeatherDisplaySection data={data} />
          <WeatherRangeAlertsAside data={data} />
        </div>
        <HourlyForecastWidgetSection data={data} />
        <DynamicContentSection data={data} />
      </div>
    </div>
  );
}
