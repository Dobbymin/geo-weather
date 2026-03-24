import Image from "next/image";
import Link from "next/link";

import { ROUTE_PATH } from "@/shared";

import { HeaderActionButtons, LocationSearch } from "../components";

export const MainHeader = () => {
  return (
    <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6'>
      <div className='flex items-center gap-4 md:gap-8'>
        <Link
          href={ROUTE_PATH.HOME}
          className='flex shrink-0 items-center gap-2 text-xl font-bold tracking-[-0.6px] text-foreground md:text-2xl'
        >
          <Image src='/logo.svg' alt='Geo Weather Logo' width={28} height={28} className='md:size-8' priority />
          <span className='hidden md:block'>Geo Weather</span>
        </Link>
      </div>
      <div className='ml-4 flex max-w-md flex-1 items-center justify-end gap-2 md:gap-4'>
        <LocationSearch />
        <HeaderActionButtons />
      </div>
    </div>
  );
};
