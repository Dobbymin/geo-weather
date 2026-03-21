type Props = {
  id: string;
  title: string;
};

export const TitleText = ({ id, title }: Props) => {
  return (
    <h2 id={id} className='text-foreground text-xl font-bold tracking-tight md:text-2xl'>
      {title}
    </h2>
  );
};
