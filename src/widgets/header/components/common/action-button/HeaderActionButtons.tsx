"use client";

import { Button, useAddFavorite, useCheckIsFavorite, useRemoveFavorite } from "@/shared";
import { cn } from "@/shared";
import { Settings, Star } from "lucide-react";
import { toast } from "sonner";

type Props = {
  locationId?: string;
  locationName?: string;
};

export const HeaderActionButtons = ({ locationId, locationName }: Props) => {
  const addFavorite = useAddFavorite();
  const removeFavorite = useRemoveFavorite();
  const isFav = useCheckIsFavorite(locationId || "");

  const handleToggleFavorite = () => {
    if (!locationId || !locationName) return;

    if (isFav) {
      removeFavorite(locationId);
      toast.info("즐겨찾기에서 제거되었습니다.");
      return;
    }

    const isSuccess = addFavorite({ id: locationId, name: locationName });

    if (isSuccess) {
      toast.success("즐겨찾기에 추가되었습니다.");
    } else {
      toast.error("최대 6개까지만 즐겨찾기에 추가할 수 있습니다.");
    }
  };

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
      <Button
        variant='ghost'
        size='icon'
        className='size-10 rounded-full text-muted-foreground transition-all active:scale-95'
      >
        <Settings size={20} />
      </Button>
    </div>
  );
};
