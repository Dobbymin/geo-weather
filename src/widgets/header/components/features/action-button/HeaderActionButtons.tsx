"use client";

import { Button, cn } from "@/shared";
import { Star } from "lucide-react";
import { useHeaderActionButtons } from "../../../_hooks/useHeaderActionButtons";

type Props = {
  locationId?: string;
  locationName?: string;
};

export const HeaderActionButtons = ({ locationId, locationName }: Props) => {
  const { isFav, handleToggleFavorite } = useHeaderActionButtons({ locationId, locationName });

  return (
    <div className='flex items-center gap-2'>
      {locationId && (
        <Button
          variant='ghost'
          size='icon'
          onClick={handleToggleFavorite}
          className={cn(
            "size-10 rounded-full transition-all active:scale-95",
            isFav ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground",
          )}
        >
          <Star size={20} className={cn(isFav && "fill-current")} />
        </Button>
      )}
    </div>
  );
};
