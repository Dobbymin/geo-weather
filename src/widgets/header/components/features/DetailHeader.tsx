import Link from "next/link";

import { useWeatherDetail } from "@/entities";
import { Button, ROUTE_PATH, Skeleton } from "@/shared";
import { ChevronLeft } from "lucide-react";

import { HeaderActionButtons } from "../common";

type Props = {
  locationId: string;
};

export const DetailHeader = ({ locationId }: Props) => {
  const { data, isLoading } = useWeatherDetail(locationId);

  return (
    <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-4'>
      <div className='flex items-center gap-4'>
        <Button
          asChild
          variant='ghost'
          size='icon'
          className='size-10 rounded-full transition-all active:scale-95'
          aria-label='Go back to home'
        >
          <Link href={ROUTE_PATH.HOME}>
            <ChevronLeft size={20} className='text-foreground' />
          </Link>
        </Button>
        <div className='flex flex-col gap-1'>
          <h1 className='font-display text-xl font-bold tracking-tight text-foreground md:text-2xl'>
            {isLoading || !data ? <Skeleton className='h-8 w-48 md:w-64' /> : data.locationName}
          </h1>
          <p className='text-[10px] font-semibold tracking-[1px] text-muted-foreground uppercase'>Current Location</p>
        </div>
      </div>
      <HeaderActionButtons locationId={locationId} locationName={data?.locationName} />
    </div>
  );
};
