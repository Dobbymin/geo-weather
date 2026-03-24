import { WeatherDetail } from "@/entities";
import { ChartContainer, ChartTooltip, Skeleton } from "@/shared";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { useHourlyForecastChart } from "../../../_hooks/useHourlyForecastChart";
import { CustomCursor, CustomTooltip } from "../../common";

type Props = {
  data?: WeatherDetail | null;
  isLoading?: boolean;
};

export const HourlyForecastChart = ({ data, isLoading }: Props) => {
  const { chartConfig, chartData, chartMinWidth } = useHourlyForecastChart(data);

  if (isLoading || !data) {
    return (
      <div className='relative mt-4 h-[300px] rounded-xl border border-border/40 bg-muted/20 p-4'>
        <div className='pointer-events-none absolute inset-x-4 top-10 flex flex-col gap-6'>
          {[1, 2, 3, 4].map((line) => (
            <div key={line} className='h-px w-full border-t border-dashed border-border/50' />
          ))}
        </div>

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
    );
  }

  return (
    <div
      className='relative mt-4'
      style={{
        minWidth: `${chartMinWidth}px`,
        height: "300px",
      }}
    >
      <ChartContainer
        config={chartConfig}
        className='h-full w-full'
        initialDimension={{ width: chartMinWidth, height: 300 }}
      >
        <BarChart data={chartData} margin={{ top: 40, right: 0, left: 0, bottom: 60 }} barGap={4}>
          <CartesianGrid vertical={false} strokeDasharray='3 3' className='stroke-foreground/10' />

          <XAxis
            dataKey='displayTime'
            axisLine={false}
            tickLine={false}
            interval={0}
            tick={(props) => {
              const { x, y, payload } = props;
              const item = chartData[payload.index];
              return (
                <g transform={`translate(${x},${y})`}>
                  <text x={0} dx={-8} y={10} textAnchor='middle' className='fill-foreground/70 text-[10px] font-bold'>
                    {item.ampm}
                  </text>
                  <text x={0} dx={-8} y={25} textAnchor='middle' className='fill-foreground text-[11px] font-bold'>
                    {item.hour}시
                  </text>
                  <text x={0} dx={-8} y={40} textAnchor='middle' className='fill-foreground/50 text-[9px] font-medium'>
                    {item.day}일
                  </text>
                </g>
              );
            }}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fontWeight: 500, fill: "hsl(var(--foreground)/ 0.7)" }}
            unit='°'
            domain={[0, 40]}
            ticks={[0, 10, 20, 30, 40]}
          />

          <ChartTooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
          <Bar
            dataKey='temp'
            fill='var(--color-temp)'
            radius={[12, 12, 0, 0]}
            barSize={14}
            className='transition-all duration-300 hover:opacity-80'
          />
          <Bar
            dataKey='pop'
            fill='var(--color-pop)'
            radius={[10, 10, 0, 0]}
            barSize={10}
            className='transition-all duration-300 hover:opacity-80'
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
};
