"use client";

import * as React from "react";

import {
  DynamicContentSection,
  HeroWeatherDisplaySection,
  HourlyForecastWidgetSection,
  WeatherRangeAlertsAside,
} from "@/features";

import { getWeatherIcon, useWeatherDetail } from "@/entities/weather";

type Props = {
  params: Promise<{ locationId: string }>;
};

export default function DetailPage({ params }: Props) {
  const { locationId } = React.use(params);
  const { data, isLoading } = useWeatherDetail(locationId);

  if (isLoading || !data) {
    return (
      <div className='flex min-h-[60vh] items-center justify-center bg-[#f8f9fa]'>
        <p className='animate-pulse font-medium text-[#5b5f64]'>Loading weather data...</p>
      </div>
    );
  }

  const { icon: MainIcon } = getWeatherIcon(data.status);

  return (
    <div className='min-h-screen bg-[#f8f9fa]'>
      <main className='mx-auto max-w-7xl px-6 py-8'>
        <div className='flex flex-col gap-12 pb-32'>
          <div className='grid grid-cols-12 gap-8'>
            <HeroWeatherDisplaySection />
            <WeatherRangeAlertsAside />
          </div>
          <HourlyForecastWidgetSection />
          <DynamicContentSection />
        </div>
      </main>
    </div>
  );
}
