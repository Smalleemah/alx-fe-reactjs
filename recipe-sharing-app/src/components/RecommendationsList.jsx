import React from "react";
import { useRecipeStore } from "./RecipeStore";

const RecommendationList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Recommended Recipes</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations yet.</p>
      ) : (
        recommendations.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: "1px solid gray",
              padding: "10px",
              margin: "10px 0",
            }}
          >
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationList;
