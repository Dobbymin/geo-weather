import { type WeatherStatus, getWeatherIcon } from "@/entities/weather";
import { cn } from "@/shared";

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
      <div className='flex items-center gap-3'>
        <div className={cn("shrink-0", color)}>
          <Icon size={24} />
        </div>
        <p className='font-semibold text-[#5b5f64]'>{date}</p>
      </div>
      <div className='flex items-baseline gap-3 leading-none'>
        <span className='text-[128px] font-extrabold tracking-[-6.4px] text-[#0052ae]'>{currentTemp}</span>
        <span className='text-4xl font-normal text-[#0069dc]'>°C</span>
      </div>
      <p className='pt-2 text-xl font-medium text-[#434656]'>
        {condition} ({conditionEn})
      </p>
    </div>
  );
};
