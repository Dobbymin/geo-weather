"use client";

import { use } from "react";

import { useWeatherDetail } from "@/entities";
import {
  DynamicContentSection,
  HeroWeatherDisplaySection,
  HourlyForecastWidgetSection,
  WeatherRangeAlertsAside,
} from "@/features";
import { Button } from "@/shared";

type Props = {
  params: Promise<{ locationId: string }>;
};

export default function DetailPage({ params }: Props) {
  const { locationId } = use(params);
  const { data, isLoading } = useWeatherDetail(locationId);

  if (!isLoading && !data) {
    return (
      <div className='flex min-h-[60vh] flex-col items-center justify-center gap-4 bg-background'>
        <p className='text-lg font-semibold text-foreground'>해당 장소의 정보가 제공되지 않습니다.</p>
        <Button onClick={() => window.history.back()} className='rounded-full px-6'>
          뒤로 가기
        </Button>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-background'>
      <div className='flex flex-col gap-6 pb-16 md:gap-12 md:pb-32'>
        <div className='grid grid-cols-12 gap-4 md:gap-8'>
          <HeroWeatherDisplaySection data={data} isLoading={isLoading} />
          <WeatherRangeAlertsAside data={data} isLoading={isLoading} />
        </div>
        <HourlyForecastWidgetSection data={data} isLoading={isLoading} />
        <DynamicContentSection data={data} isLoading={isLoading} />
      </div>
    </div>
  );
}
