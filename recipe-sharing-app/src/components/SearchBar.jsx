import React from "react";
import { useRecipeStore } from "./RecipeStore";

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="Search recipes..."
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "20px" }}
      />
    </div>
  );
};

export default SearchBar;
