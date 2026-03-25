import { useQuery } from "@tanstack/react-query";

import { District } from "../@types";
import { SearchAPI } from "../apis";

export const useGetSearch = (debouncedSearchTerm: string) => {
  return useQuery<District[]>({
    queryKey: ["location-search", debouncedSearchTerm],
    queryFn: () => SearchAPI(debouncedSearchTerm),
    enabled: debouncedSearchTerm.length >= 2,
  });
};
