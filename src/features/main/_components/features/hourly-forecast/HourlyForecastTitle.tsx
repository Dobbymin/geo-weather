import { Button } from "@/shared";
import { ArrowRight, ChevronUp } from "lucide-react";
import { TitleText } from "../../common";

type Props = {
  isExpanded: boolean;
  onToggle: () => void;
};

export const HourlyForecastTitle = ({ isExpanded, onToggle }: Props) => {
  return (
    <div className='mb-6 flex items-center justify-between px-1'>
      <TitleText id='hourly-forecast-title' title='시간별 예보' />
      <Button
        variant='link'
        className='text-primary flex h-auto items-center gap-1 p-0 font-bold hover:no-underline'
        onClick={onToggle}
      >
        {isExpanded ? "접기" : "전체보기"}
        {isExpanded ? <ChevronUp className='size-4' /> : <ArrowRight className='size-4' />}
      </Button>
    </div>
  );
};
