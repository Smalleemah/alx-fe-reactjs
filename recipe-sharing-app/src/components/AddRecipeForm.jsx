import { useState } from "react";
import { useRecipeStore } from "../stores/recipeStore";
const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      addRecipe({ id: Date.now(), title, description });
      setTitle("");
      setDescription("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ padding: "20px", marginBottom: "20px" }}
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={{
          display: "block",
          margin: "10px 0",
          width: "300px",
          padding: "5px",
        }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        style={{
          display: "block",
          margin: "10px 0",
          width: "300px",
          height: "80px",
          padding: "5px",
        }}
      />
      <button type="submit" style={{ padding: "5px 10px" }}>
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
