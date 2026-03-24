"use client";

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  FavoriteItem,
  Input,
  Label,
} from "@/shared";

import { useFavoriteItem } from "../../../_hooks/useFavoriteItem";
import { FavoritesCard } from "../../common";

type Props = {
  item: FavoriteItem;
};

export const FavoriteItemCard = ({ item }: Props) => {
  const {
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
  } = useFavoriteItem(item);

  if (isLoading || !data) {
    return (
      <div className='flex h-40 animate-pulse items-center justify-center rounded-[24px] bg-muted'>
        <p className='text-sm text-muted-foreground'>로딩 중...</p>
      </div>
    );
  }

  return (
    <>
      <FavoritesCard
        id={item.id}
        name={item.alias || data.locationName}
        temp={data.currentTemp}
        status={data.status}
        condition={data.condition}
        high={data.highTemp}
        low={data.lowTemp}
        onDeleteClick={handleDelete}
        onEditClick={handleEditClick}
      />

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent
          className='p-4 sm:max-w-106.25'
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <DialogHeader className='gap-5'>
            <DialogTitle>별칭 수정</DialogTitle>
            <DialogDescription>
              {data.locationName}의 별칭을 설정하세요. 비워두면 기본 이름으로 표시됩니다.
            </DialogDescription>
          </DialogHeader>
          <div className='grid gap-4 py-0'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='alias' className='text-right'>
                별칭
              </Label>
              <Input
                id='alias'
                value={aliasInput}
                onChange={(e) => setAliasInput(e.target.value)}
                className='col-span-3'
                placeholder={data.locationName}
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSaveAlias();
                }}
              />
            </div>
          </div>
          <DialogFooter className='px-4 py-3'>
            <Button variant='ghost' onClick={closeDialog}>
              취소
            </Button>
            <Button onClick={handleSaveAlias}>저장</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
