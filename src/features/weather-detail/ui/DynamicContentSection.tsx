import { type WeatherDetail } from "@/entities";

import { BentoCard, SunriseSunset } from "../components";

type Props = {
  data: WeatherDetail;
};

export const DynamicContentSection = ({ data }: Props) => {
  return (
    <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
      <SunriseSunset sunrise={data.sunrise} sunset={data.sunset} />
      <BentoCard label='Visibility' value={data.visibility} unit='km' description='Visibility for safe driving.' />
      <BentoCard label='Pressure' value={data.pressure} unit='hPa' description='Atmospheric pressure.' />
    </div>
  );
};
