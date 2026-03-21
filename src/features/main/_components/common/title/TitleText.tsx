type Props = {
  id: string;
  title: string;
};

export const TitleText = ({ id, title }: Props) => {
  return (
    <h2 id={id} className='text-xl font-bold tracking-tight text-[#191c1d] md:text-2xl'>
      {title}
    </h2>
  );
};
