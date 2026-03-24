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
      <div className='flex h-37 flex-col justify-between rounded-[12px] bg-muted p-6'>
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
    <div className='flex h-37 flex-col justify-between rounded-[12px] bg-muted p-6'>
      <p className='text-sm font-bold tracking-[1.6px] text-muted-foreground uppercase'>{label}</p>
      <div className='flex items-baseline gap-2'>
        <span className='font-display text-3xl font-bold text-foreground'>{value}</span>
        <span className='text-sm font-bold text-muted-foreground'>{unit}</span>
      </div>
      <p className='text-[12px] text-muted-foreground'>{description}</p>
    </div>
  );
};
