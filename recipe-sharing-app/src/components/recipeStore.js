// src/stores/recipeStore.js
import create from "zustand";
import { nanoid } from "nanoid";

export const useRecipeStore = create((set) => ({
  recipes: [
    { id: "1", title: "Spaghetti", description: "Classic Italian pasta." },
    { id: "2", title: "Pancakes", description: "Fluffy breakfast pancakes." },
  ],

  addRecipe: (title, description) =>
    set((state) => ({
      recipes: [...state.recipes, { id: nanoid(), title, description }],
    })),

  updateRecipe: (id, updatedData) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedData } : recipe,
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
}));
