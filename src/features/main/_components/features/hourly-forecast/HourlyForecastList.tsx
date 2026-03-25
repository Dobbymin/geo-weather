"use client";

import { HourlyForecastData, WeatherStatus } from "@/entities";
import { cn, useIsHydrated } from "@/shared";

import { useHourlyForecastList } from "../../../_hooks";
import { HourlyForecastCard } from "../../common";

type Props = {
  isExpanded: boolean;
  lat?: number;
  lon?: number;
};

export const HourlyForecastList = ({ isExpanded, lat, lon }: Props) => {
  const isHydrated = useIsHydrated();
  const { displayedForecast, isPending, isError } = useHourlyForecastList({ isExpanded, lat, lon });

  const isLoading = !isHydrated || isPending;

  if (isError) {
    return (
      <div className='w-full'>
        <div className='flex h-39.5 w-full items-center justify-center rounded-[24px] border border-dashed border-muted-foreground/20 bg-card/50 text-muted-foreground'>
          <p className='text-sm font-medium'>예보 정보를 불러올 수 없습니다.</p>
        </div>
      </div>
    );
  }

  const items = isLoading ? Array.from({ length: 8 }) : displayedForecast;

  return (
    <div className='w-full'>
      <div
        className={cn("scrollbar-hide pt-1 pb-4", isExpanded ? "flex flex-wrap gap-4" : "flex gap-4 overflow-x-auto")}
      >
        {items.map((item, index) => {
          if (isLoading) {
            return <HourlyForecastCard key={`skeleton-${index}`} isLoading />;
          }

          const forecastItem = item as HourlyForecastData;

          return (
            <HourlyForecastCard
              key={`${forecastItem.dt}-${index}`}
              date={forecastItem.date}
              time={forecastItem.time}
              temp={forecastItem.temp}
              status={forecastItem.status as WeatherStatus}
              isActive={index === 0}
            />
          );
        })}
      </div>
    </div>
  );
};
