"use client";

import { type WeatherDetail } from "@/entities";
import { Badge, Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared";

import { HourlyForecastChart } from "../_components";

type Props = {
  data?: WeatherDetail | null;
  isLoading?: boolean;
};

export const HourlyForecastWidgetSection = ({ data, isLoading }: Props) => {
  return (
    <Card className='rounded-[24px] border-none bg-card p-2 shadow-[0px_12px_40px_0px_rgba(25,28,29,0.06)]'>
      <CardHeader className='flex flex-row items-end justify-between gap-4 space-y-0 p-6 pb-4'>
        <div className='flex flex-col gap-1'>
          <CardTitle className='text-xl font-bold text-foreground'>시간별 예보</CardTitle>
          <CardDescription className='text-sm text-muted-foreground'>
            향후 24시간의 날씨 변화를 확인하세요
          </CardDescription>
        </div>
        <div className='flex gap-2'>
          <Badge className='border-none bg-indigo-100 px-3 py-1 text-[12px] font-bold text-indigo-600 hover:bg-indigo-100'>
            기온
          </Badge>
          <Badge className='border-none bg-cyan-100 px-3 py-1 text-[12px] font-bold text-cyan-700 hover:bg-cyan-100'>
            강수
          </Badge>
        </div>
      </CardHeader>

      <CardContent className='p-0'>
        <div className='scrollbar-hide overflow-x-auto px-0'>
          <HourlyForecastChart isLoading={isLoading} data={data} />
        </div>
      </CardContent>
    </Card>
  );
};
