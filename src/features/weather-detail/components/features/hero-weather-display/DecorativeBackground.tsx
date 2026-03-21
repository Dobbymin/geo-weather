export const DecorativeBackground = () => {
  return (
    <div className='pointer-events-none absolute inset-0 opacity-20'>
      <div
        className='absolute -top-20 -right-20 h-64 w-64 rounded-full blur-[32px]'
        style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 82, 174) 0%, rgba(0, 82, 174, 0) 100%)" }}
      />
      <div
        className='absolute right-0 -bottom-10 h-48 w-48 rounded-full blur-[32px]'
        style={{ backgroundImage: "linear-gradient(-45deg, rgb(137, 64, 0) 0%, rgba(137, 64, 0, 0) 100%)" }}
      />
    </div>
  );
};
