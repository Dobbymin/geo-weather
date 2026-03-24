import { cn } from "@/shared";

type Props = {
  icon: React.ReactNode;
  bgColor: string;
  title: string;
  description: string;
};

export const AlertCard = ({ icon, bgColor, title, description }: Props) => {
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
