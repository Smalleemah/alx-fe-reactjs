import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
        );
        const data = await res.json();
        if (data.meals) setRecipe(data.meals[0]);
        else setError("Recipe not found.");
      } catch {
        setError("Something went wrong!");
      }
      setLoading(false);
    };

    fetchRecipe();
  }, [id]);

  const getIngredients = (recipe) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      if (ingredient) ingredients.push(`${ingredient} - ${measure}`);
    }
    return ingredients;
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!recipe) return null;

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">
        <button style={{ marginBottom: "20px" }}>Back</button>
      </Link>
      <h2>{recipe.strMeal}</h2>
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        style={{ width: "300px", borderRadius: "8px" }}
      />
      <p>Category: {recipe.strCategory}</p>
      <p>Cuisine: {recipe.strArea}</p>
      <h3>Ingredients:</h3>
      <ul>
        {getIngredients(recipe).map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p>{recipe.strInstructions}</p>
    </div>
  );
}

export default RecipeDetails;
