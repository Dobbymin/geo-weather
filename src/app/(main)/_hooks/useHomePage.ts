import { useGetGeolocation } from "@/shared";

export const useHomePage = () => {
  const { lat, lon, error, isLoading: isGeolocationLoading } = useGetGeolocation();

  return {
    lat: lat ?? undefined,
    lon: lon ?? undefined,
    isGeolocationLoading,
    geoLocationError: error ?? undefined,
  };
};
