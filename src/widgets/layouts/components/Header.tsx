"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useWeatherDetail } from "@/entities";
import { ChevronLeft, Search, Settings, Star } from "lucide-react";

const MainHeader = () => (
  <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6'>
    {/* Logo & Navigation */}
    <div className='flex items-center gap-4 md:gap-8'>
      <Link
        href='/'
        className='flex shrink-0 items-center gap-2 text-xl font-bold tracking-[-0.6px] text-[#191c1d] md:text-2xl'
      >
        <Image src='/logo.svg' alt='Geo Weather Logo' width={28} height={28} className='md:h-8 md:w-8' priority />
        <span className='hidden md:block'>Geo Weather</span>
      </Link>
      <nav className='hidden items-center gap-6 md:flex'>
        <Link href='/' className='flex h-5 items-center text-sm font-bold text-[#0052ae]'>
          Home
        </Link>
        <Link
          href='/forecast'
          className='flex h-5 items-center rounded-lg px-3 py-1 text-sm font-normal text-[#191c1d] hover:bg-black/5'
        >
          Forecast
        </Link>
        <Link
          href='/favorites'
          className='flex h-5 items-center rounded-lg px-3 py-1 text-sm font-normal text-[#191c1d] hover:bg-black/5'
        >
          Favorites
        </Link>
      </nav>
    </div>

    {/* Search & Actions */}
    <div className='ml-4 flex max-w-md flex-1 items-center justify-end gap-2 md:gap-4'>
      <div className='relative w-full max-w-50 md:max-w-none'>
        <div className='absolute top-1/2 left-3 -translate-y-1/2 text-[#747688] md:left-4'>
          <Search size={14} />
        </div>
        <input
          type='text'
          placeholder='검색...'
          className='w-full rounded-full bg-[#f3f4f5] py-2 pr-3 pl-9 text-xs font-medium text-[#747688] outline-none placeholder:text-[#747688] md:py-2.5 md:pr-4 md:pl-12 md:text-sm'
        />
      </div>
      <div className='flex shrink-0 items-center gap-1 md:gap-2'>
        <button className='rounded-full p-1.5 text-[#747688] hover:bg-black/5 md:p-2'>
          <Star size={18} className='md:h-5 md:w-5' />
        </button>
        <button className='rounded-full p-1.5 text-[#747688] hover:bg-black/5 md:p-2'>
          <Settings size={18} className='md:h-5 md:w-5' />
        </button>
      </div>
    </div>
  </div>
);

const DetailHeader = ({ locationId }: { locationId: string }) => {
  const { data, isLoading } = useWeatherDetail(locationId);

  const title = isLoading || !data ? "Loading..." : data.locationName;

  return (
    <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-4'>
      <div className='flex items-center gap-4'>
        <Link
          href='/'
          className='flex size-10 items-center justify-center rounded-full transition-all hover:bg-black/5 active:scale-95'
          aria-label='Go back to home'
        >
          <ChevronLeft size={20} className='text-[#191c1d]' />
        </Link>
        <div className='flex flex-col'>
          <h1 className='text-xl font-bold tracking-tight text-[#191c1d] md:text-2xl'>{title}</h1>
          <p className='text-[10px] font-semibold tracking-[1px] text-[#94a3b8] uppercase'>Current Location</p>
        </div>
      </div>
      <div className='flex items-center gap-2'>
        <button className='flex size-10 items-center justify-center rounded-full text-[#747688] transition-all hover:bg-black/5 active:scale-95'>
          <Star size={20} />
        </button>
        <button className='flex size-10 items-center justify-center rounded-full text-[#747688] transition-all hover:bg-black/5 active:scale-95'>
          <Settings size={20} />
        </button>
      </div>
    </div>
  );
};

export const Header = () => {
  const pathname = usePathname();

  const isDetail = pathname?.startsWith("/detail");
  const locationId = isDetail ? pathname.split("/")[2] : "";

  return (
    <header className='fixed top-0 right-0 left-0 z-50 bg-[#f8f9fa] shadow-[0px_12px_40px_0px_rgba(25,28,29,0.06)]'>
      {isDetail ? <DetailHeader locationId={locationId} /> : <MainHeader />}
    </header>
  );
};
