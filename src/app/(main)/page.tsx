"use client";

import { FavoritesSection, HourlyForecastSection, WeatherInformationSection } from "@/features";

import { useHomePage } from "./_hooks/useHomePage";

export default function Home() {
  const { lat, lon, isGeolocationLoading, geoLocationError } = useHomePage();

  return (
    <main className='flex flex-col gap-8 pb-12 md:gap-12'>
      <WeatherInformationSection
        lat={lat}
        lon={lon}
        isGeoLocationLoading={isGeolocationLoading}
        geoLocationError={geoLocationError}
      />
      <HourlyForecastSection lat={lat} lon={lon} />
      <FavoritesSection />
    </main>
  );
}
