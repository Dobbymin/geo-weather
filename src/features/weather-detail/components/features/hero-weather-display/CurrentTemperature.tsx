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
      <div className={cn("absolute right-10 bottom-0 size-50", color)}>
        <Icon className='size-full' />
      </div>

      <p className='text-muted-foreground font-semibold'>{date}</p>
      <div className='flex items-baseline gap-3 leading-none'>
        <span className='text-primary font-display text-[128px] font-extrabold tracking-[-6.4px]'>
          {currentTemp}
        </span>
        <span className='text-primary-container text-4xl font-semibold'>&#176;C</span>
      </div>
      <p className='text-muted-foreground pt-2 text-xl font-medium'>
        {condition} ({conditionEn})
      </p>
    </div>
  );
};
