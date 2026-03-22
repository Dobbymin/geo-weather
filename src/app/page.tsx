"use client";

import { FavoritesSection, HourlyForecastSection, WeatherInformationSection } from "@/features";
import { useGeolocation } from "@/shared";

export default function Home() {
  const { lat, lon, isLoading: isGeolocationLoading } = useGeolocation();

  return (
    <main className='flex flex-col gap-8 pb-12 md:gap-12'>
      <WeatherInformationSection lat={lat!} lon={lon!} isGeoLocationLoading={isGeolocationLoading} />
      <HourlyForecastSection lat={lat!} lon={lon!} />
      <FavoritesSection />
    </main>
  );
}
