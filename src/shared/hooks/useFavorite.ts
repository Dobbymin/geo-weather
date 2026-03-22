import { useShallow } from "zustand/react/shallow";

import { useFavoriteStore } from "../stores";

export const useGetFavorites = () => {
  return useFavoriteStore(useShallow((state) => state.favorites));
};

export const useAddFavorite = () => {
  return useFavoriteStore((state) => state.addFavorite);
};

export const useRemoveFavorite = () => {
  return useFavoriteStore((state) => state.removeFavorite);
};

export const useUpdateAlias = () => {
  return useFavoriteStore((state) => state.updateAlias);
};

export const useCheckIsFavorite = (targetId: string) => {
  return useFavoriteStore((state) => state.checkIsFavorite(targetId));
};
