import { cn } from "@/shared";

type Props = {
  lowTemp: number;
  highTemp: number;
};

export const RangeCard = ({ lowTemp, highTemp }: Props) => {
  return (
    <div
      className={cn("gradient-primary relative flex flex-col items-start justify-center rounded-[12px] p-8 shadow-lg")}
    >
      <p className='text-md mb-4 font-bold text-primary-foreground uppercase opacity-80'>오늘의 기온</p>
      <div className='flex w-full items-center justify-between'>
        <div className='text-primary-foreground'>
          <p className='text-sm font-medium opacity-80'>최저</p>
          <p className='font-display text-[30px] leading-none font-bold'>{lowTemp}&#176;C</p>
        </div>
        <div className='h-12 w-px bg-primary-foreground/20' />
        <div className='text-right text-primary-foreground'>
          <p className='text-sm font-medium opacity-80'>최고</p>
          <p className='font-display text-[30px] leading-none font-bold'>{highTemp}&#176;C</p>
        </div>
      </div>
    </div>
  );
};
