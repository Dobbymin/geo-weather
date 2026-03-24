"use client";

import { FavoritesSection, HourlyForecastSection, WeatherInformationSection } from "@/features";
import { useGetGeolocation } from "@/shared";

export default function Home() {
  const { lat, lon, error, isLoading: isGeolocationLoading } = useGetGeolocation();

  return (
    <main className='flex flex-col gap-8 pb-12 md:gap-12'>
      <WeatherInformationSection
        lat={lat ?? undefined}
        lon={lon ?? undefined}
        isGeoLocationLoading={isGeolocationLoading}
        geoLocationError={error ?? undefined}
      />
      <HourlyForecastSection lat={lat ?? undefined} lon={lon ?? undefined} />
      <FavoritesSection />
    </main>
  );
}
