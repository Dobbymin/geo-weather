type Props = {
  humidity: number;
  windSpeed: number;
  uvIndex: string;
};

export const StatsFooter = ({ humidity, windSpeed, uvIndex }: Props) => {
  return (
    <div className='border-border relative z-10 mt-8 grid grid-cols-3 gap-4 border-t pt-8'>
      <div className='flex flex-col gap-1'>
        <p className='text-muted-foreground text-sm font-bold tracking-[1.6px] uppercase'>Humidity</p>
        <p className='text-foreground font-display text-xl font-bold'>{`${humidity}%`}</p>
      </div>

      <div className='flex flex-col gap-1'>
        <p className='text-muted-foreground text-sm font-bold tracking-[1.6px] uppercase'>Wind Speed</p>
        <p className='text-foreground font-display text-xl font-bold'>{`${windSpeed}km/h`}</p>
      </div>

      <div className='flex flex-col gap-1'>
        <p className='text-muted-foreground text-sm font-bold tracking-[1.6px] uppercase'>UV Index</p>
        <p className='text-foreground font-display text-xl font-bold'>{uvIndex}</p>
      </div>
    </div>
  );
};
