import { type WeatherDetail } from "@/entities";
import { Card } from "@/shared";

import { CurrentTemperature, DecorativeBackground, StatsFooter } from "../_components";

type Props = {
  data?: WeatherDetail | null;
  isLoading?: boolean;
};

export const HeroWeatherDisplaySection = ({ data, isLoading }: Props) => {
  return (
    <Card className='relative col-span-12 flex min-h-80 flex-col justify-start gap-4 overflow-hidden rounded-[24px] border-none bg-card p-5 shadow-none md:min-h-100 md:justify-between md:gap-0 md:p-8 lg:col-span-8'>
      <DecorativeBackground />
      <CurrentTemperature
        isLoading={isLoading}
        date={data?.date}
        currentTemp={data?.currentTemp}
        condition={data?.condition}
        conditionEn={data?.conditionEn}
        status={data?.status}
      />
      <StatsFooter 
        isLoading={isLoading}
        humidity={data?.humidity} 
        windSpeed={data?.windSpeed} 
        uvIndex={data?.uvIndex} 
      />
    </Card>
  );
};
