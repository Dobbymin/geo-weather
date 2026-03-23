import { Moon, Sun } from "lucide-react";

type Props = {
  sunrise: string;
  sunset: string;
};

export const SunriseSunset = ({ sunrise, sunset }: Props) => {
  return (
    <div className='flex flex-col gap-4 rounded-[12px] bg-muted p-6'>
      <p className='text-sm font-bold tracking-[1.6px] text-muted-foreground uppercase'>일출 & 일몰</p>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col items-center gap-2'>
          <div className='text-tertiary'>
            <Sun size={24} />
          </div>
          <p className='font-display font-bold text-foreground'>{sunrise}</p>
        </div>
        <div className='h-0.5 w-12 bg-border/30' />
        <div className='flex flex-col items-center gap-2'>
          <div className='text-primary'>
            <Moon size={24} />
          </div>
          <p className='font-display font-bold text-foreground'>{sunset}</p>
        </div>
      </div>
    </div>
  );
};
