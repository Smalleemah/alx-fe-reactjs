const favorites = useRecipeStore((state) => state.favorites);
const addFavorite = useRecipeStore((state) => state.addFavorite);
const removeFavorite = useRecipeStore((state) => state.removeFavorite);

// Inside recipe div:
<button
  onClick={() =>
    favorites.includes(recipe.id)
      ? removeFavorite(recipe.id)
      : addFavorite(recipe.id)
  }
>
  {favorites.includes(recipe.id) ? "Remove from Favorites" : "Add to Favorites"}
</button>;
