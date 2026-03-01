import React from "react";
import { useRecipeStore } from "./RecipeStore";

const RecipeList = () => {
  // Get filtered recipes based on search term
  const recipes = useRecipeStore((state) => state.filteredRecipes());
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Recipes</h2>

      {recipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        recipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: "1px solid gray",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
            }}
          >
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>

            <button
              onClick={() =>
                favorites.includes(recipe.id)
                  ? removeFavorite(recipe.id)
                  : addFavorite(recipe.id)
              }
              style={{
                padding: "5px 10px",
                backgroundColor: favorites.includes(recipe.id)
                  ? "red"
                  : "green",
                color: "white",
                border: "none",
                borderRadius: "3px",
                cursor: "pointer",
              }}
            >
              {favorites.includes(recipe.id)
                ? "Remove from Favorites"
                : "Add to Favorites"}
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
