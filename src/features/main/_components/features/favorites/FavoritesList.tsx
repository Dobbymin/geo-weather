import { useGetFavorites } from "@/shared";

import { useIsHydrated } from "../../../_hooks";
import { FavoriteItemCard } from "./FavoriteItemCard";

export const FavoritesList = () => {
  const favorites = useGetFavorites();
  const isHydrated = useIsHydrated();

  if (!isHydrated) return null;

  if (favorites.length === 0) {
    return (
      <div className='flex h-40 flex-col items-center justify-center rounded-[24px] border-2 border-dashed border-muted bg-card'>
        <p className='text-muted-foreground'>즐겨찾는 장소가 없습니다.</p>
        <p className='text-xs text-muted-foreground'>상세 페이지에서 별 아이콘을 눌러 추가해보세요!</p>
      </div>
    );
  }

  return (
    <section className='w-full space-y-4'>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {favorites.map((item) => (
          <FavoriteItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};
