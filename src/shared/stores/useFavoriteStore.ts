import { create } from "zustand";
import { combine, devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export interface FavoriteItem {
  id: string;
  name: string;
  alias?: string;
}

const MAX_FAVORITES_COUNT = 6;

const initialState = {
  favorites: [] as FavoriteItem[],
};

export const useFavoriteStore = create(
  devtools(
    persist(
      immer(
        combine(initialState, (set, get) => ({
          addFavorite: (newItem: FavoriteItem) => {
            const { favorites } = get();
            if (favorites.length >= MAX_FAVORITES_COUNT) return;
            const isAlreadyAdded = favorites.some((item) => item.id === newItem.id);
            if (isAlreadyAdded) return;
            set((state) => {
              state.favorites.push(newItem);
            });
          },
          removeFavorite: (targetId: string) => {
            set((state) => {
              state.favorites = state.favorites.filter((item) => item.id !== targetId);
            });
          },
          updateAlias: (targetId: string, newAlias: string) => {
            set((state) => {
              const targetItem = state.favorites.find((item) => item.id === targetId);
              if (targetItem) {
                targetItem.alias = newAlias.trim() || undefined;
              }
            });
          },
          checkIsFavorite: (targetId: string) => {
            return get().favorites.some((item) => item.id === targetId);
          },
        })),
      ),
      { name: "favorite-storage" },
    ),
  ),
);
