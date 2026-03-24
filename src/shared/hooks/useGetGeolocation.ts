"use client";

import { useEffect } from "react";

import { useGeolocationStore } from "../stores";
import { getGeolocationErrorMessage } from "../utils";

import { useGeolocation } from "./useGeolocation";

export const useGetGeolocation = () => {
  const geoState = useGeolocation();

  useEffect(() => {
    const { error, isLoading, timestamp, setLocation, setError } = useGeolocationStore.getState();

    if (typeof navigator === "undefined" || !navigator.geolocation) {
      if (!error) {
        setError("Geolocation을 지원하지 않는 브라우저입니다.");
      }
      return;
    }

    const CACHE_DURATION = 1000 * 60 * 5;
    const isCacheValid = timestamp && Date.now() - timestamp < CACHE_DURATION;

    if (isCacheValid && !isLoading) return;

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setLocation(coords.latitude, coords.longitude);
      },
      (geoError) => {
        setError(getGeolocationErrorMessage(geoError.code));
      },
      { enableHighAccuracy: false, timeout: 5000, maximumAge: CACHE_DURATION },
    );
  }, []);

  return geoState;
};
