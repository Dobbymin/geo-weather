import Link from "next/link";

import { useWeatherDetail } from "@/entities";
import { Button, ROUTE_PATH, Skeleton } from "@/shared";
import { ChevronLeft } from "lucide-react";

import { HeaderActionButtons, LocationSearch } from "../components";

type Props = {
  locationId: string;
};

export const DetailHeader = ({ locationId }: Props) => {
  const { data, isLoading } = useWeatherDetail(locationId);

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
        <div className='flex flex-col gap-0.5 md:gap-1'>
          <h1 className='line-clamp-1 font-display text-base font-bold tracking-tight text-foreground md:text-2xl'>
            {isLoading || !data ? <Skeleton className='h-6 w-32 md:h-8 md:w-64' /> : data.locationName}
          </h1>
          <p className='text-[8px] font-semibold tracking-[1px] text-muted-foreground uppercase md:text-[10px]'>
            Current Location
          </p>
        </div>
      </div>
      <div className='flex items-center gap-2 md:gap-4'>
        <LocationSearch />
        <HeaderActionButtons locationId={locationId} locationName={data?.locationName} />
      </div>
    </div>
  );
};
