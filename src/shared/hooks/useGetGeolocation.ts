"use client";

import { useEffect, useRef } from "react";

import { getGeolocationErrorMessage } from "../utils";

import { useGeolocation, useSetGeolocationError, useSetLocation } from "./useGeolocation";

export const useGetGeolocation = () => {
  const geoState = useGeolocation();
  const setLocation = useSetLocation();
  const setError = useSetGeolocationError();

  const stateRef = useRef(geoState);
  const setLocationRef = useRef(setLocation);
  const setErrorRef = useRef(setError);

  useEffect(() => {
    stateRef.current = geoState;
    setLocationRef.current = setLocation;
    setErrorRef.current = setError;
  });

  useEffect(() => {
    const { error, isLoading, timestamp } = stateRef.current;

    if (typeof navigator === "undefined" || !navigator.geolocation) {
      if (!error) {
        setErrorRef.current("Geolocation을 지원하지 않는 브라우저입니다.");
      }
      return;
    }

    const CACHE_DURATION = 1000 * 60 * 5;
    const isCacheValid = timestamp && Date.now() - timestamp < CACHE_DURATION;

    if (isCacheValid && !isLoading) return;

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setLocationRef.current(coords.latitude, coords.longitude);
      },
      (geoError) => {
        setErrorRef.current(getGeolocationErrorMessage(geoError.code));
      },
      { enableHighAccuracy: false, timeout: 5000, maximumAge: CACHE_DURATION },
    );
  }, []);

  return geoState;
};
