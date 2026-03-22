import { useQuery } from "@tanstack/react-query";

import { type LocationParams, getLocation } from "../apis";

export const useGetLocation = ({ lat, lon }: LocationParams) => {
  return useQuery({
    queryKey: ["location", lat, lon],
    queryFn: () => getLocation({ lat, lon }),
    staleTime: Infinity,
    enabled: !!lat && !!lon,
  });
};
