export const DecorativeBackground = () => {
  return (
    <div className='pointer-events-none absolute inset-0 opacity-20'>
      <div className='absolute -top-5 -right-5 size-64 rounded-full bg-linear-to-br from-primary to-transparent blur-[32px]' />
      <div className='absolute right-0 -bottom-5 size-48 rounded-full bg-linear-to-tl from-tertiary to-transparent blur-[32px]' />
    </div>
  );
};
