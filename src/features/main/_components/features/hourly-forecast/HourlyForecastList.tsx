"use client";

import { WeatherStatus, useGetHourlyForecast } from "@/entities";

import { HourlyForecastCard } from "../../common";

export const HourlyForecastList = () => {
  const { data: hourlyForecastData, isLoading, isError } = useGetHourlyForecast({ lat: 37.573, lon: 126.979 }); // 서울특별시 종로구 기준

  if (isLoading) return <div>로딩 중...</div>;
  if (!hourlyForecastData) return <div>예보 정보를 찾을 수 없습니다.</div>;
  if (isError) return <div>예보 정보를 가져오는데 실패했습니다.</div>;

  return (
    <div className='w-full'>
      <div className='scrollbar-hide flex gap-4 overflow-x-auto pt-1 pb-4'>
        {hourlyForecastData.hourly.map((item, index) => (
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
