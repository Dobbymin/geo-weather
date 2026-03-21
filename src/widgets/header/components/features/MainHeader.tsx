import Image from "next/image";
import Link from "next/link";

import { Input, ROUTE_PATH } from "@/shared";
import { Search } from "lucide-react";

import { HeaderActionButtons } from "../common";

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
        <div className='relative w-full max-w-50 md:max-w-none'>
          <div className='absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground md:left-4'>
            <Search size={14} />
          </div>
          <Input
            type='text'
            placeholder='검색'
            className='w-full rounded-full border-none bg-muted py-2 pr-3 pl-9 text-xs font-medium text-muted-foreground placeholder:text-muted-foreground focus-visible:ring-0 md:py-2.5 md:pr-4 md:pl-12 md:text-sm'
          />
        </div>
        <HeaderActionButtons />
      </div>
    </div>
  );
};
