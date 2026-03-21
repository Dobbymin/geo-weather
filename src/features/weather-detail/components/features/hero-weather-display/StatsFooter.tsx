type Props = {
  humidity: number;
  windSpeed: number;
  uvIndex: string;
};

export const StatsFooter = ({ humidity, windSpeed, uvIndex }: Props) => {
  return (
    <div className='relative z-10 mt-8 grid grid-cols-3 gap-4 border-t border-[rgba(196,197,217,0.15)] pt-8'>
      <div className='flex flex-col gap-1'>
        <p className='text-sm font-bold tracking-[1.6px] text-[#5b5f64] uppercase'>Humidity</p>
        <p className='text-xl font-bold text-[#191c1d]'>{`${humidity}%`}</p>
      </div>

      <div className='flex flex-col gap-1'>
        <p className='text-sm font-bold tracking-[1.6px] text-[#5b5f64] uppercase'>Wind Speed</p>
        <p className='text-xl font-bold text-[#191c1d]'>{`${windSpeed}km/h`}</p>
      </div>

      <div className='flex flex-col gap-1'>
        <p className='text-sm font-bold tracking-[1.6px] text-[#5b5f64] uppercase'>UV Index</p>
        <p className='text-xl font-bold text-[#191c1d]'>{uvIndex}</p>
      </div>
    </div>
  );
};
