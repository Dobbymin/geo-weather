"use client";

import { useWeatherDetail } from "@/entities";
import { FavoriteItem, useRemoveFavorite, useUpdateAlias } from "@/shared";

import { FavoritesCard } from "../../common";

type Props = {
  item: FavoriteItem;
};

export const FavoriteItemCard = ({ item }: Props) => {
  const { data, isLoading } = useWeatherDetail(item.id);
  const removeFavorite = useRemoveFavorite();
  const updateAlias = useUpdateAlias();

  if (isLoading || !data) {
    return (
      <div className='flex h-40 animate-pulse items-center justify-center rounded-[24px] bg-muted'>
        <p className='text-sm text-muted-foreground'>로딩 중...</p>
      </div>
    );
  }

  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    removeFavorite(item.id);
  };

  const handleEdit = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const newAlias = prompt("별칭을 입력하세요 (비워두면 원래 이름 사용):", item.alias || "");
    if (newAlias !== null) {
      updateAlias(item.id, newAlias);
    }
  };

  return (
    <FavoritesCard
      id={item.id}
      name={item.alias || data.locationName}
      temp={data.currentTemp}
      status={data.status}
      condition={data.condition}
      high={data.highTemp}
      low={data.lowTemp}
      onDeleteAction={handleDelete}
      onEditAction={handleEdit}
    />
  );
};
