import { Skeleton } from "@/shared";

type Props = {
  label: string;
  value?: number;
  unit: string;
  description: string;
  isLoading?: boolean;
};

export const BentoCard = ({ label, value, unit, description, isLoading }: Props) => {
  if (isLoading || value === undefined) {
    return (
      <div className='bg-muted flex h-37 flex-col justify-between rounded-[12px] p-6'>
        <Skeleton className='h-4 w-16' />
        <div className='flex items-end gap-2'>
          <Skeleton className='h-9 w-16' />
          <Skeleton className='h-4 w-8' />
        </div>
        <Skeleton className='h-3 w-44' />
      </div>
    );
  }

  return (
    <div className='bg-muted flex h-37 flex-col justify-between rounded-[12px] p-6'>
      <p className='text-muted-foreground text-sm font-bold tracking-[1.6px] uppercase'>{label}</p>
      <div className='flex items-baseline gap-2'>
        <span className='text-foreground font-display text-3xl font-bold'>{value}</span>
        <span className='text-muted-foreground text-sm font-bold'>{unit}</span>
      </div>
      <p className='text-muted-foreground text-[12px]'>{description}</p>
    </div>
  );
};
