import { cn } from "@/shared";

type Props = {
  icon: React.ReactNode;
  bgColor: string;
  title: string;
  description: string;
};

export const AlertCard = ({ icon, bgColor, title, description }: Props) => {
  return (
    <div className='flex items-center gap-4 rounded-[12px] bg-[#f3f4f5] p-6'>
      <div className={cn("flex size-12 items-center justify-center rounded-full", bgColor)}>{icon}</div>
      <div className='flex flex-col'>
        <p className='text-base font-bold text-[#191c1d]'>{title}</p>
        <p className='text-sm text-[#434656]'>{description}</p>
      </div>
    </div>
  );
};
