import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import recipesData from "../data.json";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = recipesData.find((r) => r.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) return <div className="text-center mt-10">Loading...</div>;

  // Example ingredients and steps (add more for real recipes)
  const ingredients = [
    "1 cup flour",
    "2 eggs",
    "1/2 cup milk",
    "Salt to taste",
  ];
  const steps = [
    "Preheat oven to 180°C.",
    "Mix all ingredients in a bowl.",
    "Pour mixture into a pan.",
    "Bake for 25 minutes.",
  ];

  return (
    <div className="container mx-auto p-6">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-gray-700 mb-6">{recipe.summary}</p>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
            <ul className="list-disc list-inside text-gray-700">
              {ingredients.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Cooking Steps</h2>
            <ol className="list-decimal list-inside text-gray-700">
              {steps.map((step, idx) => (
                <li key={idx} className="mb-2">
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
