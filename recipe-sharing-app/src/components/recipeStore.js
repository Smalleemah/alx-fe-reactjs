import { create } from "zustand";

export const useRecipeStore = create((set, get) => ({
  recipes: [
    { id: 1, title: "Spaghetti", description: "Tomato pasta" },
    { id: 2, title: "Fried Rice", description: "Nigerian fried rice" },
  ],

  favorites: [],
  recommendations: [],

  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter(
      (recipe) => !favorites.includes(recipe.id) && Math.random() > 0.3,
    );
    set({ recommendations: recommended });
  },
}));
