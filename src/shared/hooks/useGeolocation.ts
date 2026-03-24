"use client";

import { useShallow } from "zustand/react/shallow";

import { useGeolocationStore } from "../stores";

export const useGeolocation = () => {
  return useGeolocationStore(
    useShallow((state) => ({
      lat: state.lat,
      lon: state.lon,
      error: state.error,
      isLoading: state.isLoading,
      timestamp: state.timestamp,
    })),
  );
};

export const useSetLocation = () => {
  return useGeolocationStore((state) => state.setLocation);
};

export const useSetGeolocationError = () => {
  return useGeolocationStore((state) => state.setError);
};

export const useSetGeolocationLoading = () => {
  return useGeolocationStore((state) => state.setLoading);
};
