import { Skeleton, cn } from "@/shared";

type Props = {
  icon: React.ReactNode;
  bgColor: string;
  title: string;
  description: string;
  isLoading?: boolean;
};

export const AlertCard = ({ icon, bgColor, title, description, isLoading }: Props) => {
  if (isLoading) {
    return (
      <div className='bg-muted flex items-center gap-4 rounded-[12px] p-6'>
        <Skeleton className='size-12 rounded-full' />
        <div className='flex flex-col gap-2'>
          <Skeleton className='h-5 w-20' />
          <Skeleton className='h-4 w-40' />
        </div>
      </div>
    );
  }

  return (
    <div className='bg-muted flex items-center gap-4 rounded-[12px] p-6'>
      <div className={cn("flex size-12 items-center justify-center rounded-full", bgColor)}>{icon}</div>
      <div className='flex flex-col'>
        <p className='text-foreground text-base font-bold'>{title}</p>
        <p className='text-muted-foreground text-sm'>{description}</p>
      </div>
    </div>
  );
};
