import { cn } from "@/shared";

import { type WeatherStatus, getWeatherIcon } from "@/entities/weather";

type Props = {
  date: string;
  currentTemp: number;
  condition: string;
  conditionEn: string;
  status: WeatherStatus;
};

export const CurrentTemperature = ({ date, currentTemp, condition, conditionEn, status }: Props) => {
  const { icon: Icon, color } = getWeatherIcon(status);

  return (
    <div className='relative z-10 flex flex-col gap-2'>
      <div
        className={cn(
          "pointer-events-none absolute right-4 bottom-9 size-28 md:right-10 md:bottom-0 md:size-50",
          color,
        )}
      >
        <Icon className='size-full' />
      </div>

      <p className='font-semibold text-muted-foreground'>{date}</p>
      <div className='flex items-baseline gap-3 leading-none'>
        <span className='font-display text-[100px] font-extrabold tracking-[-4px] text-primary md:text-[128px] md:tracking-[-6.4px]'>
          {currentTemp}
        </span>
        <span className='text-4xl font-semibold text-primary-container'>&#176;C</span>
      </div>
      <p className='pt-2 text-xl font-medium text-muted-foreground'>
        {condition} ({conditionEn})
      </p>
    </div>
  );
};
