import React from "react";
import HomePage from "./components/HomePage";
import AddRecipeForm from "./components/AddRecipeForm";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import FavouritesList from "./components/FavouritesList";
import RecommendationList from "./components/RecommendationList";

function App() {
  return (
    <div>
      <HomePage />
      <AddRecipeForm />
      <SearchBar />
      <RecipeList />
      <FavouritesList />
      <RecommendationList />
    </div>
  );
}

export default App;
