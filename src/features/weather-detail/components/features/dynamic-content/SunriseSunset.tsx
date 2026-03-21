import { Moon, Sun } from "lucide-react";

type Props = {
  sunrise: string;
  sunset: string;
};

export const SunriseSunset = ({ sunrise, sunset }: Props) => {
  return (
    <div className='flex flex-col gap-4 rounded-[12px] bg-[#f3f4f5] p-6'>
      <p className='text-sm font-bold tracking-[1.6px] text-[#5b5f64] uppercase'>Sunrise & Sunset</p>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col items-center gap-1'>
          <div className='text-orange-400'>
            <Sun size={24} />
          </div>
          <p className='text-lg font-bold text-[#191c1d]'>{sunrise}</p>
        </div>
        <div className='h-0.5 w-12 bg-[rgba(196,197,217,0.3)]' />
        <div className='flex flex-col items-center gap-1'>
          <div className='text-[#0052ae]'>
            <Moon size={24} />
          </div>
          <p className='text-lg font-bold text-[#191c1d]'>{sunset}</p>
        </div>
      </div>
    </div>
  );
};
