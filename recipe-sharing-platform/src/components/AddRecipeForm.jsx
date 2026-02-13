import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddRecipeForm({ onAdd }) {
  const navigate = useNavigate();

  // Form state
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  // Validation errors
  const [errors, setErrors] = useState({});

  // ✅ ALX-required validate function
  const validate = () => {
    const newErrors = {};

    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required";
    if (!steps.trim()) newErrors.steps = "Preparation steps are required";

    // Ingredients must have at least 2 items
    const ingredientItems = ingredients
      .split(",")
      .map((i) => i.trim())
      .filter(Boolean);
    if (ingredientItems.length < 2)
      newErrors.ingredients =
        "Please enter at least 2 ingredients separated by commas";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate(); // Call the validate function
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Construct new recipe object
    const newRecipe = {
      id: Date.now(),
      title,
      summary: steps.slice(0, 50) + "...",
      image: "https://via.placeholder.com/300",
      ingredients: ingredients
        .split(",")
        .map((i) => i.trim())
        .filter(Boolean),
      steps: steps
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean),
    };

    // Add recipe to parent state
    if (onAdd) onAdd(newRecipe);

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});

    // Redirect to home
    navigate("/");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block mb-1 font-semibold">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block mb-1 font-semibold">
            Ingredients (comma separated)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 200g spaghetti, 100g bacon, 2 eggs"
            rows={3}
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Steps */}
        <div>
          <label className="block mb-1 font-semibold">
            Preparation Steps (each step on new line)
          </label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            placeholder={`Step 1: Preheat oven...
Step 2: Mix ingredients...
Step 3: Bake until golden`}
          />
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>

        {/
