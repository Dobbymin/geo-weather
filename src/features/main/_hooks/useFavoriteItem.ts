import { useState } from "react";

import { useWeatherDetail } from "@/entities";
import { type FavoriteItem, useRemoveFavorite, useUpdateAlias } from "@/shared";

export const useFavoriteItem = (item: FavoriteItem) => {
  const { data, isLoading } = useWeatherDetail(item.id);
  const removeFavorite = useRemoveFavorite();
  const updateAlias = useUpdateAlias();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [aliasInput, setAliasInput] = useState(item.alias || "");

  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    removeFavorite(item.id);
  };

  const handleEditClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setAliasInput(item.alias || "");
    setIsDialogOpen(true);
  };

  const handleSaveAlias = () => {
    updateAlias(item.id, aliasInput);
    setIsDialogOpen(false);
  };

  const closeDialog = () => setIsDialogOpen(false);

  return {
    data,
    isLoading,
    isDialogOpen,
    setIsDialogOpen,
    aliasInput,
    setAliasInput,
    handleDelete,
    handleEditClick,
    handleSaveAlias,
    closeDialog,
  };
};
