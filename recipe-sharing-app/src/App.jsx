import FavouritesList from "./components/FavouritesList";
import RecommendationList from "./components/RecommendationList";
import Navbar from "./components/Navbar";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/add" element={<AddRecipeForm />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
