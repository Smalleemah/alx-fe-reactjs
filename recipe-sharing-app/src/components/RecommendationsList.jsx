import React, { useEffect } from "react";
import { useRecipeStore } from "./RecipeStore";

const RecommendationList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations,
  );

  useEffect(() => {
    generateRecommendations();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Recommended Recipes</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations available.</p>
      ) : (
        recommendations.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: "10px" }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationList;
