import React from "react";
import RecipeList from "./components/RecipeList";
import FavouritesList from "./components/FavouritesList";
import RecommendationList from "./components/RecommendationList";
import AddRecipeForm from "./components/AddRecipeForm";
import SearchBar from "./components/SearchBar";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div>
      {/* Optional Home Page */}
      <HomePage />

      {/* Add Recipe Form */}
      <AddRecipeForm />

      {/* Search Recipes */}
      <SearchBar />

      {/* All Recipes with Favorite button */}
      <RecipeList />

      {/* User Favorites */}
      <FavouritesList />

      {/* Recommended Recipes */}
      <RecommendationList />
    </div>
  );
}

export default App;
