import { Button } from "@/shared";
import { ArrowRight } from "lucide-react";

import { TitleText } from "../../common";

export const HourlyForecastTitle = () => {
  return (
    <div className='mb-6 flex items-center justify-between px-1'>
      <TitleText id='hourly-forecast-title' title='시간별 예보' />
      <Button variant='link' className='text-primary flex h-auto items-center gap-1 p-0 font-bold hover:no-underline'>
        전체보기
        <ArrowRight className='size-4' />
      </Button>
    </div>
  );
};
