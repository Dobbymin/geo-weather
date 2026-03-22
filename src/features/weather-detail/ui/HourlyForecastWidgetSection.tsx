import { type WeatherDetail, getWeatherIcon } from "@/entities";
import { Badge, Card, CardContent, CardDescription, CardHeader, CardTitle, cn } from "@/shared";

type Props = {
  data: WeatherDetail;
};

export const HourlyForecastWidgetSection = ({ data }: Props) => {
  const hourlyForecast = data.hourlyForecast;

  const MAX_TEMP_FOR_CHART = 35;

  return (
    <Card className='rounded-[24px] border-none bg-card p-2 shadow-[0px_12px_40px_0px_rgba(25,28,29,0.06)]'>
      <CardHeader className='flex flex-row items-end justify-between gap-4 space-y-0 p-6 pb-10'>
        <div className='flex flex-col gap-1'>
          <CardTitle className='text-xl font-bold text-foreground'>Hourly Forecast</CardTitle>
          <CardDescription className='text-sm text-muted-foreground'>
            Visualizing the next 24 hours of change
          </CardDescription>
        </div>
        <div className='flex gap-2'>
          <Badge className='border-none bg-primary-fixed px-3 py-1 text-[12px] font-bold text-primary hover:bg-primary-fixed'>
            Temperature
          </Badge>
          <Badge
            variant='secondary'
            className='border-none bg-accent px-3 py-1 text-[12px] font-bold text-accent-foreground hover:bg-accent'
          >
            Precipitation
          </Badge>
        </div>
      </CardHeader>

      <CardContent className='p-6 pt-0'>
        {/* Custom Chart Visualization */}
        <div className='relative h-64 w-full'>
          {/* Grid Lines */}
          <div className='absolute inset-0 flex flex-col justify-between py-2 opacity-10'>
            {[...Array(4)].map((_, i) => (
              <div key={i} className='h-px w-full bg-foreground' />
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
                    <span className='font-display text-xs font-bold text-primary'>{item.temp}&#176;C</span>
                    <HourlyIcon className={cn("size-4", hourlyColor)} />
                  </div>

                  {/* Bar */}
                  <div
                    className='relative w-4 cursor-pointer rounded-t-lg bg-primary/10 transition-all hover:bg-primary/20'
                    style={{ height: `${(item.temp / MAX_TEMP_FOR_CHART) * 100}%` }}
                  >
                    <div className='absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-primary shadow-[0px_0px_10px_0px] shadow-primary/50' />
                  </div>

                  {/* Time */}
                  <span className='mt-4 font-display text-[10px] font-bold tracking-tighter text-muted-foreground uppercase'>
                    {item.time}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
