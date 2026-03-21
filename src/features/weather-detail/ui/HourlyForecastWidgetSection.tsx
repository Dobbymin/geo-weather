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
    <section className='rounded-[12px] bg-white p-8 shadow-[0px_12px_40px_0px_rgba(25,28,29,0.06)]'>
      <div className='mb-10 flex flex-wrap items-end justify-between gap-4'>
        <div className='flex flex-col gap-1'>
          <h3 className='text-xl font-bold text-[#191c1d]'>Hourly Forecast</h3>
          <p className='text-sm text-[#5b5f64]'>Visualizing the next 24 hours of change</p>
        </div>
        <div className='flex gap-2'>
          <Badge className='bg-[#d8e2ff] px-3 py-1 text-[12px] font-bold text-[#0052ae] hover:bg-[#d8e2ff]'>
            Temperature
          </Badge>
          <Badge
            variant='secondary'
            className='bg-[#e7e8e9] px-3 py-1 text-[12px] font-bold text-[#434656] hover:bg-[#e7e8e9]'
          >
            Precipitation
          </Badge>
        </div>
      </div>

      {/* Custom Chart Visualization */}
      <div className='relative h-64 w-full'>
        {/* Grid Lines */}
        <div className='absolute inset-0 flex flex-col justify-between py-2 opacity-5'>
          {[...Array(4)].map((_, i) => (
            <div key={i} className='h-px w-full bg-[#191c1d]' />
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
                  <span className='text-xs font-bold text-[#0052ae]'>{item.temp}&#176;C</span>
                  <HourlyIcon className={cn("size-4", hourlyColor)} />
                </div>

                {/* Bar */}
                <div
                  className='relative w-4 cursor-pointer rounded-t-lg bg-[#0052ae]/10 transition-all hover:bg-[#0052ae]/20'
                  style={{ height: `${(item.temp / MAX_TEMP_FOR_CHART) * 100}%` }}
                >
                  <div className='absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#0052ae] shadow-[0px_0px_10px_0px_rgba(0,82,174,0.5)]' />
                </div>

                {/* Time */}
                <span className='mt-4 text-[10px] font-bold tracking-tighter text-[#5b5f64] uppercase'>
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
