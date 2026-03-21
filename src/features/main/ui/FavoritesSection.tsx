import { FavoritesList, FavoritesTitle } from "../_components";

export const FavoritesSection = () => {
  return (
    <section aria-labelledby='favorites'>
      <FavoritesTitle />
      <FavoritesList />
    </section>
  );
};
