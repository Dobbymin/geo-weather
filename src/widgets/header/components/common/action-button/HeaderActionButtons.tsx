import { Button, useAddFavorite, useRemoveFavorite, useGetFavorites } from "@/shared";
import { Settings, Star } from "lucide-react";
import { cn } from "@/shared/utils";
import { toast } from "sonner";

interface HeaderActionButtonsProps {
  locationId?: string;
  locationName?: string;
}

export const HeaderActionButtons = ({ locationId, locationName }: HeaderActionButtonsProps) => {
  const addFavorite = useAddFavorite();
  const removeFavorite = useRemoveFavorite();
  const favorites = useGetFavorites();
  const isFav = locationId ? favorites.some((f) => f.id === locationId) : false;

  const handleToggleFavorite = () => {
    if (!locationId || !locationName) return;
    if (isFav) {
      removeFavorite(locationId);
      toast.info("즐겨찾기에서 제거되었습니다.");
    } else {
      if (favorites.length >= 6) {
        toast.error("최대 6개까지만 즐겨찾기에 추가할 수 있습니다.");
        return;
      }
      addFavorite({ id: locationId, name: locationName });
      toast.success("즐겨찾기에 추가되었습니다.");
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
            isFav ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"
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
