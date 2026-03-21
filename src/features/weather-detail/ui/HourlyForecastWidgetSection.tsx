import { Badge, cn } from "@/shared";

import { type WeatherStatus, getWeatherIcon } from "@/entities/weather";

const MOCK_HOURLY_DATA: { time: string; temp: number; status: WeatherStatus }[] = [
  { time: "14:00", temp: 22, status: "CLEAR" },
  { time: "15:00", temp: 23, status: "CLEAR" },
  { time: "16:00", temp: 24, status: "CLEAR" },
  { time: "17:00", temp: 23, status: "PARTLY_CLOUDY" },
  { time: "18:00", temp: 21, status: "CLOUDY" },
  { time: "19:00", temp: 19, status: "CLOUDY" },
  { time: "20:00", temp: 18, status: "CLOUDY" },
];

export const HourlyForecastWidgetSection = () => {
  const hourlyForecast = MOCK_HOURLY_DATA;

  const MAX_TEMP_FOR_CHART = 35;

  return (
    <section className='bg-card rounded-[24px] p-8 shadow-[0px_12px_40px_0px_rgba(25,28,29,0.06)]'>
      <div className='mb-10 flex flex-wrap items-end justify-between gap-4'>
        <div className='flex flex-col gap-1'>
          <h3 className='text-foreground text-xl font-bold'>Hourly Forecast</h3>
          <p className='text-muted-foreground text-sm'>Visualizing the next 24 hours of change</p>
        </div>
        <div className='flex gap-2'>
          <Badge className='bg-primary-fixed text-primary hover:bg-primary-fixed border-none px-3 py-1 text-[12px] font-bold'>
            Temperature
          </Badge>
          <Badge
            variant='secondary'
            className='bg-accent text-accent-foreground hover:bg-accent border-none px-3 py-1 text-[12px] font-bold'
          >
            Precipitation
          </Badge>
        </div>
      </div>

      {/* Custom Chart Visualization */}
      <div className='relative h-64 w-full'>
        {/* Grid Lines */}
        <div className='absolute inset-0 flex flex-col justify-between py-2 opacity-10'>
          {[...Array(4)].map((_, i) => (
            <div key={i} className='bg-foreground h-px w-full' />
          ))}
        </div>

        {/* Columns */}
        <div className='relative flex h-full items-end justify-between px-2'>
          {hourlyForecast.map((item, idx) => {
            const { icon: HourlyIcon, color: hourlyColor } = getWeatherIcon(item.status);
            return (
              <div
                key={`${item.time}-${idx}`}
                className='group relative flex h-full flex-1 flex-col items-center justify-end'
              >
                {/* Temp Tooltip (Hover) */}
                <div className='absolute -top-10 flex flex-col items-center gap-1 opacity-0 transition-all group-hover:opacity-100'>
                  <span className='text-primary font-display text-xs font-bold'>
                    {item.temp}&#176;C
                  </span>
                  <HourlyIcon className={cn("size-4", hourlyColor)} />
                </div>

                {/* Bar */}
                <div
                  className='bg-primary/10 hover:bg-primary/20 relative w-4 cursor-pointer rounded-t-lg transition-all'
                  style={{ height: `${(item.temp / MAX_TEMP_FOR_CHART) * 100}%` }}
                >
                  <div className='bg-primary shadow-primary/50 absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full shadow-[0px_0px_10px_0px]' />
                </div>

                {/* Time */}
                <span className='text-muted-foreground mt-4 font-display text-[10px] font-bold tracking-tighter uppercase'>
                  {item.time}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
