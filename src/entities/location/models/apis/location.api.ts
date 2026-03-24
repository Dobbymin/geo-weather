export interface LocationParams {
  lat: number;
  lon: number;
}

export interface LocationResponse {
  locationName: string;
}

export const getLocation = async ({ lat, lon }: LocationParams): Promise<LocationResponse> => {
  const response = await fetch(`/api/location?lat=${lat}&lon=${lon}`);

  if (!response.ok) throw new Error("위치 정보를 가져오는데 실패했습니다.");

  return response.json();
};
