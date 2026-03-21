import { Badge } from "@/shared";
import { MapPin } from "lucide-react";

import { type WeatherStatus, getWeatherIcon } from "@/entities/weather";

const MOCK_CURRENT_WEATHER = {
  locationName: "서울특별시 종로구",
  temp: 24,
  status: "CLEAR" as WeatherStatus,
  conditionText: "맑음 · Partly Cloudy",
  lowTemp: 18,
  highTemp: 26,
  isAutoDetected: true,
};

export const CurrentWeather = () => {
  const { locationName, temp, status, conditionText, lowTemp, highTemp, isAutoDetected } = MOCK_CURRENT_WEATHER;

  const { icon: WeatherIcon } = getWeatherIcon(status);

  return (
    <div
      className='relative flex w-full flex-col items-start overflow-hidden rounded-[40px] p-8 shadow-xl md:p-12'
      style={{
        backgroundImage: "linear-gradient(168.62deg, #0052ae 0%, #0069dc 100%)",
      }}
    >
      {/* Decorative Elements */}
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute -top-[10%] -right-[5%] size-75 rounded-full bg-white/10 blur-[32px]' />
        <div className='absolute -bottom-[20%] left-[10%] size-75 rounded-full bg-[#d8e2ff]/10 blur-[32px]' />
      </div>

      <div className='relative z-10 flex w-full flex-col justify-between gap-8 md:flex-row md:items-center'>
        <div className='flex flex-col gap-2 md:gap-4'>
          {isAutoDetected && (
            <Badge
              variant='secondary'
              className='h-auto gap-2 bg-white/10 px-3 py-1 text-[#ecf0ff] backdrop-blur-[6px] hover:bg-white/20'
            >
              <span>
                <MapPin className='size-5' />
              </span>
              <span className='text-md font-bold uppercase md:text-xs'>현재 위치</span>
            </Badge>
          )}

          <h2 className='text-2xl font-medium tracking-tight text-[#ecf0ff] md:text-[36px] md:leading-10'>
            {locationName}
          </h2>

          <p className='text-base text-[#ecf0ff]/90 md:text-lg'>{conditionText}</p>

          <div className='mt-2 flex items-center gap-4 text-sm text-[#ecf0ff] md:mt-4'>
            <div className='flex items-center gap-1'>
              <span className='opacity-70'>Low</span>
              <span className='font-bold'>{lowTemp}°</span>
            </div>
            <div className='flex items-center gap-1'>
              <span className='opacity-70'>High</span>
              <span className='font-bold'>{highTemp}°</span>
            </div>
          </div>
        </div>

        {/* Right Side: Temperature & Icon */}
        <div className='flex items-center gap-4 self-end md:gap-8 md:self-auto'>
          <div className='size-16 text-[#ecf0ff] md:size-22'>
            <WeatherIcon className='size-full' />
          </div>
          <div className='text-7xl font-extrabold tracking-[-3px] text-[#ecf0ff] md:text-[128px] md:tracking-[-6.4px]'>
            {temp}°
          </div>
        </div>
      </div>
    </div>
  );
};
