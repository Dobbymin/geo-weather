"use client";

import { useEffect, useState } from "react";

import { getGeolocationErrorMessage } from "../utils";

type GeolocationState = {
  lat: number | null;
  lon: number | null;
  error: string | null;
  isLoading: boolean;
};

const getInitialState = (): GeolocationState => {
  if (typeof navigator === "undefined" || !navigator.geolocation) {
    return {
      lat: null,
      lon: null,
      error: "Geolocation을 지원하지 않는 브라우저입니다.",
      isLoading: false,
    };
  }
  return { lat: null, lon: null, error: null, isLoading: true };
};

export const useGeolocation = () => {
  const [state, setState] = useState<GeolocationState>(getInitialState);

  useEffect(() => {
    if (!navigator.geolocation) return; // 초기 상태에서 이미 처리됨

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
      { enableHighAccuracy: false, timeout: 5000, maximumAge: 1000 * 60 * 5 },
    );
  }, []);

  return state;
};
