"use client";

import dynamic from "next/dynamic";

import { type WeatherDetail } from "@/entities";
import { Badge, Card, CardContent, CardDescription, CardHeader, CardTitle, Skeleton } from "@/shared";

const HourlyForecastChart = dynamic(
  () =>
    import("../_components/features/hourly-forecast-widget/HourlyForecastChart").then((mod) => ({
      default: mod.HourlyForecastChart,
    })),
  {
    ssr: false,
    loading: () => (
      <div className='relative mt-4 h-[300px] rounded-xl border border-border/40 bg-muted/20 p-4'>
        <div className='absolute right-6 bottom-16 left-12 flex items-end gap-2'>
          {[48, 72, 56, 88, 70, 98, 84, 108, 76, 92, 66, 80].map((height, i) => (
            <Skeleton key={i} className='w-4 rounded-t-md' style={{ height: `${height}px` }} />
          ))}
        </div>
        <div className='absolute right-6 bottom-4 left-12 flex w-[calc(100%-80px)] justify-between'>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className='flex flex-col items-center gap-1'>
              <Skeleton className='h-2 w-6' />
              <Skeleton className='h-2.5 w-8' />
              <Skeleton className='h-2 w-5' />
            </div>
          ))}
        </div>
      </div>
    ),
  },
);

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
