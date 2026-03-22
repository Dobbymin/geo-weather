"use client";

import { useEffect, useMemo } from "react";

import { WeatherStatus, useGetHourlyForecast } from "@/entities";
import { Skeleton, cn } from "@/shared";
import { toast } from "sonner";

import { HourlyForecastCard } from "../../common";

type Props = {
  isExpanded: boolean;
  lat?: number;
  lon?: number;
};

export const HourlyForecastList = ({ isExpanded, lat, lon }: Props) => {
  const { data: hourlyForecastData, isPending, isError } = useGetHourlyForecast({ lat: lat as number, lon: lon as number }); // 서울특별시 종로구 기준

  const displayedForecast = useMemo(() => {
    if (!hourlyForecastData) return [];
    if (isExpanded) return hourlyForecastData.hourly;

    const uniqueDates = Array.from(new Set(hourlyForecastData.hourly.map((item) => item.date)));
    const todayAndTomorrow = uniqueDates.slice(0, 2);

    return hourlyForecastData.hourly.filter((item) => todayAndTomorrow.includes(item.date));
  }, [hourlyForecastData, isExpanded]);

  useEffect(() => {
    if (isError) {
      toast.error("예보 정보를 가져오는데 실패했습니다.");
    } else if (!isPending && (!hourlyForecastData || hourlyForecastData.hourly.length === 0)) {
      toast.warning("예보 정보를 찾을 수 없습니다.");
    }
  }, [isError, isPending, hourlyForecastData]);

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


  if (isError || !hourlyForecastData || hourlyForecastData.hourly.length === 0) {
    return (
      <div className='w-full'>
        <div className='flex h-39.5 w-full items-center justify-center rounded-[24px] border border-dashed border-muted-foreground/20 bg-card/50 text-muted-foreground'>
          <p className='text-sm font-medium'>
            {isError ? "예보 정보를 불러올 수 없습니다." : "데이터가 존재하지 않습니다."}
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
