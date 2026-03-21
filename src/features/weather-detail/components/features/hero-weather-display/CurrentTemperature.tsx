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

      <p className='font-semibold text-[#5b5f64]'>{date}</p>
      <div className='flex items-baseline gap-3 leading-none'>
        <span className='text-[128px] font-extrabold tracking-[-6.4px] text-[#0052ae]'>{currentTemp}</span>
        <span className='text-4xl font-semibold text-[#0069dc]'>&#176;C</span>
      </div>
      <p className='pt-2 text-xl font-medium text-[#434656]'>
        {condition} ({conditionEn})
      </p>
    </div>
  );
};
