import { getUvIndexLabel } from "@/entities";

type Props = {
  humidity: number;
  windSpeed: number;
  uvIndex: string;
};

export const StatsFooter = ({ humidity, windSpeed, uvIndex }: Props) => {
  return (
    <div className='relative z-10 mt-8 grid grid-cols-3 gap-4 border-t border-border pt-8'>
      <div className='flex flex-col gap-1'>
        <p className='text-sm font-bold tracking-[1.6px] text-muted-foreground uppercase'>습도</p>
        <p className='font-display text-xl font-bold text-foreground'>{`${humidity}%`}</p>
      </div>

      <div className='flex flex-col gap-1'>
        <p className='text-sm font-bold tracking-[1.6px] text-muted-foreground uppercase'>풍속</p>
        <p className='font-display text-xl font-bold text-foreground'>{`${windSpeed}km/h`}</p>
      </div>

      <div className='flex flex-col gap-1'>
        <p className='text-sm font-bold tracking-[1.6px] text-muted-foreground uppercase'>자외선 지수</p>
        <p className='font-display text-xl font-bold text-foreground'>{getUvIndexLabel(uvIndex)}</p>
      </div>
    </div>
  );
};
