import { AlertCircle, Wind } from "lucide-react";

import { AlertCard, RangeCard } from "../components";

export const WeatherRangeAlertsAside = () => {
  return (
    <aside className='col-span-12 flex flex-col gap-6 lg:col-span-4'>
      <RangeCard lowTemp={12} highTemp={28} />
      <AlertCard
        icon={<AlertCircle className='text-[#894000]' />}
        bgColor='bg-[#ffdbc8]'
        title='Rain Alert'
        description='Heavy rain expected in 2 hours.'
      />
      <AlertCard
        icon={<Wind className='text-[#0052ae]' />}
        bgColor='bg-[#d8e2ff]'
        title='Air Quality'
        description='24 AQI - Excellent'
      />
    </aside>
  );
};
