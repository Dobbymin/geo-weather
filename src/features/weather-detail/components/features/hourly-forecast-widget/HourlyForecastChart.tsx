import { WeatherDetail } from "@/entities";
import { ChartConfig, ChartContainer, ChartTooltip } from "@/shared";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { CustomCursor, CustomTooltip } from "../../common";

type Props = {
  data: WeatherDetail;
};

export const HourlyForecastChart = ({ data }: Props) => {
  const chartConfig = {
    temp: {
      label: "기온",
      color: "#b8c5ff",
    },
    pop: {
      label: "강수",
      color: "#c4efff",
    },
  } satisfies ChartConfig;

  const chartData = data.hourlyForecast.map((item) => {
    const timeParts = item.time.split(" ");
    const ampm = timeParts[0];
    const hour = timeParts[1]?.split(":")[0];
    const day = item.date.split("/")[1];

    return {
      ...item,
      displayTime: `${item.time}`,
      ampm,
      hour,
      day,
    };
  });

  const CHART_MIN_WIDTH = data.hourlyForecast.length * 44 + 32;

  return (
    <div
      className='relative mt-4'
      style={{
        minWidth: `${CHART_MIN_WIDTH}px`,
        height: "300px",
      }}
    >
      <ChartContainer
        config={chartConfig}
        className='h-full w-full'
        initialDimension={{ width: CHART_MIN_WIDTH, height: 300 }}
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

          {/* <ChartTooltip content={<CustomTooltip />}  /> */}
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
