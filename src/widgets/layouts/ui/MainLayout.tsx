import { Footer, Header } from "../components";

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <div className='flex min-h-screen flex-col bg-linear-to-b from-[#f8f9fa] to-[#eef2f6]'>
      <Header />
      <main className='mx-auto mt-18 w-full max-w-7xl flex-1 px-6 py-8'>{children}</main>
      <Footer />
    </div>
  );
}
