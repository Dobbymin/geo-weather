"use client";

import Link from "next/link";

import { Button, ROUTE_PATH } from "@/shared";
import { ChevronLeft } from "lucide-react";

import { HeaderActionButtons } from "../components";

type Props = {
  locationId: string;
  locationName: string;
};

export const DetailHeader = ({ locationId, locationName }: Props) => {
  return (
    <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6'>
      <div className='flex items-center gap-2 md:gap-4'>
        <Button
          asChild
          variant='ghost'
          size='icon'
          className='size-8 rounded-full transition-all active:scale-95 md:size-10'
          aria-label='Go back to home'
        >
          <Link href={ROUTE_PATH.HOME}>
            <ChevronLeft size={20} className='text-foreground' />
          </Link>
        </Button>
        <h1 className='line-clamp-1 font-display text-base font-bold tracking-tight text-foreground md:text-2xl'>
          {locationName}
        </h1>
      </div>
      <HeaderActionButtons locationId={locationId} locationName={locationName} />
    </div>
  );
};

