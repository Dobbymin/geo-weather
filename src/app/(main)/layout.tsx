import { MainHeader } from "@/widgets";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className='fixed top-0 right-0 left-0 z-50 bg-background shadow-[0px_12px_40px_0px_rgba(25,28,29,0.06)]'>
        <MainHeader />
      </header>
      {children}
    </>
  );
}
