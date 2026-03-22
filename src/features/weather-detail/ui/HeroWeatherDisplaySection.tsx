import { type WeatherDetail } from "@/entities";
import { Card } from "@/shared";

import { CurrentTemperature, DecorativeBackground, StatsFooter } from "../components";

type Props = {
  data: WeatherDetail;
};

export const HeroWeatherDisplaySection = ({ data }: Props) => {
  return (
    <Card className='relative col-span-12 flex min-h-100 flex-col justify-between overflow-hidden rounded-[24px] border-none bg-card p-8 shadow-none lg:col-span-8'>
      <DecorativeBackground />
      <CurrentTemperature
        date={data.date}
        currentTemp={data.currentTemp}
        condition={data.condition}
        conditionEn={data.conditionEn}
        status={data.status}
      />
      <StatsFooter humidity={data.humidity} windSpeed={data.windSpeed} uvIndex={data.uvIndex} />
    </Card>
  );
};
