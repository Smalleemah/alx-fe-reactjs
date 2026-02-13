import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import recipesData from "../data.json";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  if (recipes.length === 0) {
    return <h1 className="text-center mt-10">Loading recipes...</h1>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Recipes</h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
                <p className="text-gray-600">{recipe.summary}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
