"use client";

import { WeatherStatus } from "@/entities";
import { Skeleton, cn } from "@/shared";

import { HourlyForecastCard } from "../../common";
import { useHourlyForecastList } from "../../../_hooks/useHourlyForecastList";

type Props = {
  isExpanded: boolean;
  lat?: number;
  lon?: number;
};

export const HourlyForecastList = ({ isExpanded, lat, lon }: Props) => {
  const { displayedForecast, isPending, isError } = useHourlyForecastList({ isExpanded, lat, lon });

  if (isPending) {
    return (
      <div className='w-full'>
        <div className='scrollbar-hide flex gap-4 overflow-x-auto pt-1 pb-4'>
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className='h-39.5 min-w-24 rounded-[24px]' />
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className='w-full'>
        <div className='flex h-39.5 w-full items-center justify-center rounded-[24px] border border-dashed border-muted-foreground/20 bg-card/50 text-muted-foreground'>
          <p className='text-sm font-medium'>
            예보 정보를 불러올 수 없습니다.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='w-full'>
      <div
        className={cn("scrollbar-hide pt-1 pb-4", isExpanded ? "flex flex-wrap gap-4" : "flex gap-4 overflow-x-auto")}
      >
        {displayedForecast.map((item, index) => (
          <HourlyForecastCard
            key={`${item.dt}-${index}`}
            date={item.date}
            time={item.time}
            temp={item.temp}
            status={item.status as WeatherStatus}
            isActive={index === 0}
          />
        ))}
      </div>
    </div>
  );
};
