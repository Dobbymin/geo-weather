"use client";

import { useEffect, useState } from "react";

import { getGeolocationErrorMessage } from "../utils";

type GeolocationState = {
  lat: number | null;
  lon: number | null;
  error: string | null;
  isLoading: boolean;
};

export const useGeolocation = () => {
  const [state, setState] = useState<GeolocationState>({
    lat: null,
    lon: null,
    error: null,
    isLoading: true,
  });

  useEffect(() => {
    if (typeof window !== "undefined" && !navigator.geolocation) {
      setState((prev) => ({
        ...prev,
        error: "브라우저가 위치정보를 제공하지 않습니다.",
        isLoading: false,
      }));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setState({
          lat: coords.latitude,
          lon: coords.longitude,
          error: null,
          isLoading: false,
        });
      },
      (error) => {
        setState({
          lat: null,
          lon: null,
          error: getGeolocationErrorMessage(error.code),
          isLoading: false,
        });
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 },
    );
  }, []);

  return state;
};

