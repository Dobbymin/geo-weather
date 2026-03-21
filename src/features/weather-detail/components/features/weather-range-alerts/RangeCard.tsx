import { cn } from "@/shared";

type Props = {
  lowTemp: number;
  highTemp: number;
};

export const RangeCard = ({ lowTemp, highTemp }: Props) => {
  return (
    <div
      className={cn(
        "gradient-primary relative flex flex-col items-start justify-center rounded-[12px] p-8 shadow-lg",
      )}
    >
      <p className='text-primary-foreground mb-4 text-sm font-bold tracking-[1.6px] uppercase opacity-80'>
        Range Today
      </p>
      <div className='flex w-full items-center justify-between'>
        <div className='text-primary-foreground'>
          <p className='text-sm font-medium opacity-80'>Low</p>
          <p className='font-display text-[30px] font-bold leading-none'>{lowTemp}&#176;C</p>
        </div>
        <div className='bg-primary-foreground/20 h-12 w-px' />
        <div className='text-primary-foreground text-right'>
          <p className='text-sm font-medium opacity-80'>High</p>
          <p className='font-display text-[30px] font-bold leading-none'>{highTemp}&#176;C</p>
        </div>
      </div>
    </div>
  );
};
