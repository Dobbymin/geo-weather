import { Moon, Sun } from "lucide-react";

type Props = {
  sunrise: string;
  sunset: string;
};

export const SunriseSunset = ({ sunrise, sunset }: Props) => {
  return (
    <div className='bg-muted flex flex-col gap-4 rounded-[12px] p-6'>
      <p className='text-muted-foreground text-sm font-bold tracking-[1.6px] uppercase'>Sunrise & Sunset</p>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col items-center gap-1'>
          <div className='text-tertiary'>
            <Sun size={24} />
          </div>
          <p className='text-foreground font-display text-lg font-bold'>{sunrise}</p>
        </div>
        <div className='bg-border/30 h-0.5 w-12' />
        <div className='flex flex-col items-center gap-1'>
          <div className='text-primary'>
            <Moon size={24} />
          </div>
          <p className='text-foreground font-display text-lg font-bold'>{sunset}</p>
        </div>
      </div>
    </div>
  );
};
