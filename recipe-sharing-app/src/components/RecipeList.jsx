import { useRecipeStore } from "../stores/recipeStore";

const RecipeList = () => {
  // Get recipes from Zustand store
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Recipe List</h2>
      {recipes.length === 0 ? (
        <p style={{ textAlign: "center", fontStyle: "italic" }}>
          No recipes yet!
        </p>
      ) : (
        recipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: "1px solid gray",
              padding: "10px",
              margin: "10px 0",
              borderRadius: "5px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h3 style={{ margin: "0 0 5px 0" }}>{recipe.title}</h3>
            <p style={{ margin: 0 }}>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
