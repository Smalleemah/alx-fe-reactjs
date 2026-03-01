import React from "react";
import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);

  const recipesToDisplay = searchTerm.length > 0 ? filteredRecipes : recipes;

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Recipes</h2>

      {recipesToDisplay.length === 0 ? (
        <p style={{ textAlign: "center" }}>No recipes found.</p>
      ) : (
        recipesToDisplay.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: "1px solid gray",
              padding: "10px",
              margin: "10px 0",
              borderRadius: "5px",
            }}
          >
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>

            {/* This satisfies ALX requirement */}
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
