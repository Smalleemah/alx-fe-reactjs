import React, { useState } from "react";
import { useRecipeStore } from "./RecipeStore";

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({ id: Date.now(), title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
      <h2>Add New Recipe</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: "block", margin: "10px 0" }}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ display: "block", margin: "10px 0" }}
        required
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
