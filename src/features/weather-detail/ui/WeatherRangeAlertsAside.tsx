import { type WeatherDetail } from "@/entities";
import { AlertCircle, Wind } from "lucide-react";

import { AlertCard, RangeCard } from "../components";

type Props = {
  data: WeatherDetail;
};

export const WeatherRangeAlertsAside = ({ data }: Props) => {
  return (
    <aside className='col-span-12 flex flex-col gap-6 lg:col-span-4'>
      <RangeCard lowTemp={data.lowTemp} highTemp={data.highTemp} />
      <AlertCard
        icon={<AlertCircle className='text-tertiary' />}
        bgColor='bg-tertiary/20'
        title='Rain Alert'
        description='Heavy rain expected in 2 hours.'
      />
      <AlertCard
        icon={<Wind className='text-primary' />}
        bgColor='bg-primary-fixed'
        title='Air Quality'
        description='24 AQI - Excellent'
      />
    </aside>
  );
};
