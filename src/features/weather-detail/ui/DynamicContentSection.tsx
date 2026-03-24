import { type WeatherDetail } from "@/entities";

import { BentoCard, SunriseSunset } from "../_components";

type Props = {
  data?: WeatherDetail | null;
  isLoading?: boolean;
};

export const DynamicContentSection = ({ data, isLoading }: Props) => {
  return (
    <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
      <SunriseSunset isLoading={isLoading} sunrise={data?.sunrise} sunset={data?.sunset} />
      <BentoCard
        isLoading={isLoading}
        label='가시거리'
        value={data?.visibility}
        unit='km'
        description='안전한 운전을 위한 가시거리입니다.'
      />
      <BentoCard
        isLoading={isLoading}
        label='기압'
        value={data?.pressure}
        unit='hPa'
        description='현재 대기압입니다.'
      />
    </div>
  );
};
