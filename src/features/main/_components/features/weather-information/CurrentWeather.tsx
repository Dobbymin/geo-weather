import { type WeatherStatus, getWeatherIcon } from "@/entities";
import { Badge, cn } from "@/shared";
import { MapPin } from "lucide-react";

type Props = {
  data: {
    name: string;
    temp: number;
    status: WeatherStatus;
    description: string;
    lowTemp: number;
    highTemp: number;
  };
  isAutoDetected?: boolean;
};

export const CurrentWeather = ({ data, isAutoDetected = true }: Props) => {
  const { name, temp, status, description, lowTemp, highTemp } = data;
  const { icon: WeatherIcon } = getWeatherIcon(status);

  return (
    <div
      className={cn(
        "gradient-primary relative flex w-full flex-col items-start overflow-hidden rounded-[40px] p-8 shadow-xl md:p-12",
      )}
    >
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute -top-[10%] -right-[5%] size-75 rounded-full bg-white/10 blur-[32px]' />
        <div className='absolute -bottom-[20%] left-[10%] size-75 rounded-full bg-primary-fixed/10 blur-[32px]' />
      </div>

      <div className='relative z-10 flex w-full flex-col justify-between gap-8 md:flex-row md:items-center'>
        <div className='flex flex-col gap-2 md:gap-4'>
          {isAutoDetected && (
            <Badge
              variant='secondary'
              className='h-auto gap-2 border-none bg-white/10 px-3 py-1 text-primary-foreground backdrop-blur-[6px] hover:bg-white/20'
            >
              <span>
                <MapPin className='size-5' />
              </span>
              <span className='text-md font-bold uppercase md:text-xs'>현재 위치</span>
            </Badge>
          )}

          <h2 className='text-2xl font-medium tracking-tight text-primary-foreground md:text-[36px] md:leading-10'>
            {name}
          </h2>

          <p className='text-base text-primary-foreground/90 md:text-lg'>{description}</p>

          <div className='mt-2 flex items-center gap-4 text-sm text-primary-foreground md:mt-4'>
            <div className='flex items-center gap-1'>
              <span className='opacity-70'>Low</span>
              <span className='font-bold'>{lowTemp}&#176;</span>
            </div>
            <div className='flex items-center gap-1'>
              <span className='opacity-70'>High</span>
              <span className='font-bold'>{highTemp}&#176;</span>
            </div>
          </div>
        </div>

        <div className='flex items-center gap-4 self-end md:gap-8 md:self-auto'>
          <div className='size-16 text-primary-foreground md:size-22'>
            <WeatherIcon className='size-full' />
          </div>
          <div className='font-display text-7xl font-extrabold tracking-[-3px] text-primary-foreground md:text-[128px] md:tracking-[-6.4px]'>
            {temp}&#176;
          </div>
        </div>
      </div>
    </div>
  );
};
