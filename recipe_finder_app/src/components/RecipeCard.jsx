import React from "react";
import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        margin: "10px",
        width: "250px",
        textAlign: "center",
      }}
    >
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h3>{recipe.strMeal}</h3>
      <p>{recipe.strCategory}</p>
      <Link to={`/recipe/${recipe.idMeal}`}>
        <button style={{ padding: "5px 10px" }}>View Recipe</button>
      </Link>
    </div>
  );
}

export default RecipeCard;
