type Props = {
  lowTemp: number;
  highTemp: number;
};

export const RangeCard = ({ lowTemp, highTemp }: Props) => {
  return (
    <div
      className='relative flex flex-col items-start justify-center rounded-[12px] p-8 text-white shadow-lg'
      style={{ backgroundImage: "linear-gradient(157.66deg, rgb(0, 82, 174) 0%, rgb(0, 105, 220) 100%)" }}
    >
      <p className='mb-4 text-sm font-bold tracking-[1.6px] uppercase opacity-80'>Range Today</p>
      <div className='flex w-full items-center justify-between'>
        <div>
          <p className='text-sm font-medium opacity-80'>Low</p>
          <p className='text-[30px] leading-none font-bold'>{lowTemp}&#176;C</p>
        </div>
        <div className='h-12 w-px bg-white/20' />
        <div className='text-right'>
          <p className='text-sm font-medium opacity-80'>High</p>
          <p className='text-[30px] leading-none font-bold'>{highTemp}&#176;C</p>
        </div>
      </div>
    </div>
  );
};
