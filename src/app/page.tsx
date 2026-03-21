import { FavoritesSection, HourlyForecastSection, WeatherInformationSection } from "@/features";

export default function Home() {
  return (
    <main className='flex flex-col gap-8 pb-12 md:gap-12'>
      <WeatherInformationSection />
      <HourlyForecastSection />
      <FavoritesSection />
    </main>
  );
}
