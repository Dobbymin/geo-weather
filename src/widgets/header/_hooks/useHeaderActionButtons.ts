import { useAddFavorite, useCheckIsFavorite, useIsHydrated, useRemoveFavorite } from "@/shared";
import { toast } from "sonner";

type Params = {
  locationId?: string;
  locationName?: string;
};

export const useHeaderActionButtons = ({ locationId, locationName }: Params) => {
  const isHydrated = useIsHydrated();
  const addFavorite = useAddFavorite();
  const removeFavorite = useRemoveFavorite();
  const checkIsFavorite = useCheckIsFavorite(locationId || "");
  const isFav = isHydrated ? checkIsFavorite : false;

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

  return {
    isFav,
    handleToggleFavorite,
  };
};
