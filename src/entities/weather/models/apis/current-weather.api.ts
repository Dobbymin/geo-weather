export interface CurrentWeatherParams {
  lat: number;
  lon: number;
}

export const getCurrentWeather = async ({ lat, lon }: CurrentWeatherParams) => {
  const response = await fetch(`/api/weather?lat=${lat}&lon=${lon}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch current weather: ${response.statusText}`);
  }

  return response.json();
};
