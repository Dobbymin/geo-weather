"use client";

import { create } from "zustand";
import { StateStorage, combine, createJSONStorage, devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const sessionStorageWrapper: StateStorage = {
  getItem: (name) => {
    if (typeof window === "undefined") return null;
    return sessionStorage.getItem(name);
  },
  setItem: (name, value) => {
    if (typeof window === "undefined") return;
    sessionStorage.setItem(name, value);
  },
  removeItem: (name) => {
    if (typeof window === "undefined") return;
    sessionStorage.removeItem(name);
  },
};

const initialState = {
  lat: null! as number | null,
  lon: null! as number | null,
  error: null as string | null,
  isLoading: true,
  timestamp: null! as number | null,
};

export const useGeolocationStore = create(
  devtools(
    persist(
      immer(
        combine(initialState, (set) => ({
          setLocation: (lat: number, lon: number) =>
            set((state) => {
              state.lat = lat;
              state.lon = lon;
              state.error = null;
              state.isLoading = false;
              state.timestamp = Date.now();
            }),
          setError: (error: string) =>
            set((state) => {
              state.lat = null;
              state.lon = null;
              state.error = error;
              state.isLoading = false;
            }),
          setLoading: (isLoading: boolean) =>
            set((state) => {
              state.isLoading = isLoading;
            }),
        })),
      ),
      {
        name: "geo-cache",
        storage: createJSONStorage(() => sessionStorageWrapper),
      },
    ),
  ),
);
