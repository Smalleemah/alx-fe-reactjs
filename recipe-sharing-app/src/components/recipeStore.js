import create from "zustand";

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  recommendations: [],
  searchTerm: "",

  // Recipe actions
  addRecipe: (recipe) =>
    set((state) => ({ recipes: [...state.recipes, recipe] })),
  setRecipes: (recipes) => set({ recipes }),

  // Favorite actions
  addFavorite: (id) =>
    set((state) => ({ favorites: [...state.favorites, id] })),
  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((favId) => favId !== id),
    })),

  // Search actions
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: () =>
    get().recipes.filter((r) =>
      r.title.toLowerCase().includes(get().searchTerm.toLowerCase()),
    ),

  // Recommendation (mock)
  generateRecommendations: () =>
    set((state) => ({
      recommendations: state.recipes.filter(
        (r) => state.favorites.includes(r.id) && Math.random() > 0.5,
      ),
    })),
}));
