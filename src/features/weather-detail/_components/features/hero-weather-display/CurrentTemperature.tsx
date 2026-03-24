import { type WeatherStatus, getWeatherIcon } from "@/entities";
import { Skeleton, cn } from "@/shared";

type Props = {
  date?: string;
  currentTemp?: number;
  condition?: string;
  conditionEn?: string;
  status?: WeatherStatus;
  isLoading?: boolean;
};

export const CurrentTemperature = ({ date, currentTemp, condition, conditionEn, status, isLoading }: Props) => {
  if (isLoading || !status || !date || currentTemp === undefined) {
    return (
      <div className='relative z-10 flex flex-col gap-2'>
        <div className='flex items-center justify-between gap-4'>
          <div className='flex flex-col gap-2'>
            <Skeleton className='h-5 w-36' />
            <div className='flex items-end gap-3'>
              <Skeleton className='h-24 w-24 md:h-32 md:w-48' />
              <Skeleton className='h-9 w-14' />
            </div>
          </div>
          <Skeleton className='mt-6 mr-3 size-25 shrink-0 rounded-full md:absolute md:right-10 md:bottom-0 md:size-44' />
        </div>
        <Skeleton className='mt-1 h-6 w-48 md:mt-2 md:h-7 md:w-64' />
      </div>
    );
  }

  const { icon: Icon, color } = getWeatherIcon(status);

  return (
    <div className='relative z-10 flex flex-col gap-2'>
      <p className='font-semibold text-muted-foreground'>{date}</p>
      <div className='flex items-center justify-between gap-4'>
        <div className='flex flex-col gap-2'>
          <div className='flex items-baseline gap-3 leading-none'>
            <span className='font-display text-[100px] font-extrabold tracking-[-4px] text-primary md:text-[128px] md:tracking-[-6.4px]'>
              {currentTemp}
            </span>
            <span className='text-4xl font-semibold text-primary-container'>&#176;C</span>
          </div>
        </div>

        <div
          className={cn("pointer-events-none size-28 shrink-0 md:absolute md:right-10 md:bottom-0 md:size-50", color)}
        >
          <Icon className='size-full' />
        </div>
      </div>
      <p className='pt-2 text-xl font-medium text-muted-foreground md:pt-4'>
        {condition} ({conditionEn})
      </p>
    </div>
  );
};
