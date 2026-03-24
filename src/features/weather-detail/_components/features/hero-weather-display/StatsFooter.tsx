import { getUvIndexLabel } from "@/entities";
import { Skeleton } from "@/shared";

type Props = {
  humidity?: number;
  windSpeed?: number;
  uvIndex?: string;
  isLoading?: boolean;
};

export const StatsFooter = ({ humidity, windSpeed, uvIndex, isLoading }: Props) => {
  if (isLoading || humidity === undefined || windSpeed === undefined || !uvIndex) {
    return (
      <div className='relative z-10 mt-2 grid grid-cols-3 gap-4 border-t border-border pt-4 md:mt-10 md:pt-8'>
        {[1, 2, 3].map((i) => (
          <div key={i} className='flex flex-col gap-2'>
            <Skeleton className='h-3.5 w-14' />
            <Skeleton className='h-6 w-18' />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className='relative z-10 mt-2 grid grid-cols-3 gap-4 border-t border-border pt-4 md:mt-10 md:pt-8'>
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
