import { type WeatherStatus } from "@/entities/weather";

import { HourlyForecastCard } from "../../common";

const HOURLY_DATA_MOCK: { time: string; temp: number; status: WeatherStatus }[] = [
  { time: "현재", temp: 12, status: "CLEAR" },
  { time: "1시", temp: 11, status: "PARTLY_CLOUDY" },
  { time: "2시", temp: 10, status: "CLOUDY" },
  { time: "3시", temp: 9, status: "RAIN" },
  { time: "4시", temp: 8, status: "THUNDERSTORM" },
  { time: "5시", temp: 7, status: "RAIN" },
  { time: "6시", temp: 5, status: "SNOW" },
  { time: "7시", temp: 4, status: "SNOW" },
  { time: "8시", temp: 6, status: "CLOUDY" },
  { time: "9시", temp: 8, status: "PARTLY_CLOUDY" },
  { time: "10시", temp: 10, status: "CLEAR" },
  { time: "11시", temp: 12, status: "CLEAR" },
];

export const HourlyForecastList = () => {
  return (
    <div className='w-full'>
      <div className='scrollbar-hide flex gap-4 overflow-x-auto pt-1 pb-4'>
        {HOURLY_DATA_MOCK.map((hour, index) => (
          <HourlyForecastCard key={`${hour.time}-${index}`} {...hour} />
        ))}
      </div>
    </div>
  );
};
