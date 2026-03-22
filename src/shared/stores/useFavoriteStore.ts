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
          /** 즐겨찾기 항목 추가 (성공 여부 반환) */
          addFavorite: (newItem: FavoriteItem): boolean => {
            const { favorites } = get();

            // 최대 개수 제한 확인
            if (favorites.length >= MAX_FAVORITES_COUNT) {
              return false;
            }

            // 중복 추가 방지 (이미 추가되어 있다면 성공으로 간주)
            const isAlreadyAdded = favorites.some((item) => item.id === newItem.id);
            if (isAlreadyAdded) {
              return true;
            }

            set((state) => {
              state.favorites.push(newItem);
            });

            return true;
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
