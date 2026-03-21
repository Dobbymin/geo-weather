"use client";

import * as React from "react";

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
  const { locationId } = React.use(params);
  const { data, isLoading } = useWeatherDetail(locationId);

  if (isLoading || !data) {
    return (
      <div className='flex min-h-[60vh] items-center justify-center bg-background'>
        <p className='animate-pulse font-medium text-muted-foreground'>Loading weather data...</p>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-background'>
      <div className='flex flex-col gap-12 pb-32'>
        <div className='grid grid-cols-12 gap-8'>
          <HeroWeatherDisplaySection />
          <WeatherRangeAlertsAside />
        </div>
        <HourlyForecastWidgetSection />
        <DynamicContentSection />
      </div>
    </div>
  );
}
