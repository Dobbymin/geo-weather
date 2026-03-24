import { use } from "react";

import { useWeatherDetail } from "@/entities";

export const useDetailPage = (params: Promise<{ locationId: string }>) => {
  const { locationId } = use(params);
  const { data, isLoading } = useWeatherDetail(locationId);

  const handleBackClick = () => {
    window.history.back();
  };

  return {
    data,
    isLoading,
    handleBackClick,
  };
};
