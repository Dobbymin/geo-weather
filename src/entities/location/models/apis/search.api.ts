export const SearchAPI = async (debouncedSearchTerm: string) => {
  const response = await fetch(`/api/location/search?q=${encodeURIComponent(debouncedSearchTerm)}`);

  if (!response.ok) return [];

  return response.json();
};
