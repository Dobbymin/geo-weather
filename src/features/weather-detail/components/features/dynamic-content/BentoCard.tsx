type Props = {
  label: string;
  value: number;
  unit: string;
  description: string;
};

export const BentoCard = ({ label, value, unit, description }: Props) => {
  return (
    <div className='flex h-37 flex-col justify-between rounded-[12px] bg-[#f3f4f5] p-6'>
      <p className='text-sm font-bold tracking-[1.6px] text-[#5b5f64] uppercase'>{label}</p>
      <div className='flex items-baseline gap-2'>
        <span className='text-3xl font-bold text-[#191c1d]'>{value}</span>
        <span className='text-sm font-bold text-[#434656]'>{unit}</span>
      </div>
      <p className='text-[12px] text-[#5b5f64]'>{description}</p>
    </div>
  );
};
