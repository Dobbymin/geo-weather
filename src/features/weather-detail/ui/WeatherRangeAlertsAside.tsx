import { type WeatherDetail } from "@/entities";
import { CloudRain, Thermometer } from "lucide-react";

import { AlertCard, RangeCard } from "../_components";

type Props = {
  data?: WeatherDetail | null;
  isLoading?: boolean;
};

export const WeatherRangeAlertsAside = ({ data, isLoading }: Props) => {
  return (
    <aside className='col-span-12 flex flex-col gap-6 lg:col-span-4'>
      <RangeCard isLoading={isLoading} lowTemp={data?.lowTemp} highTemp={data?.highTemp} />
      <AlertCard
        isLoading={isLoading}
        icon={<CloudRain className='text-primary' />}
        bgColor='bg-primary-fixed'
        title='비 예보'
        description={data?.rain ? `현재 시간당 ${data.rain}mm 강수 중입니다.` : "오늘은 비 예보가 없습니다."}
      />
      <AlertCard
        isLoading={isLoading}
        icon={<Thermometer className='text-tertiary' />}
        bgColor='bg-tertiary/20'
        title='체감 온도'
        description={`현재 체감 온도는 ${data?.feelsLike}°C 입니다.`}
      />
    </aside>
  );
};
