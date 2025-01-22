import { useState,useEffect } from "react";
import RecipeList from "../RecipeList/RecipeList";
import axios from 'axios'
const Home= ({query}) => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [favourites, setFavourites] = useState([]);
  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
         ` https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}`
        );
        setRecipes(response.data.data.recipes); // استخدم بيانات الاستجابة
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [query]);
  
  
    const toggleFavourite = (recipe) => {
      if (favourites.some((fav) => fav.id === recipe.id)) {
        setFavourites(favourites.filter((fav) => fav.id !== recipe.id));
      } else {
        setFavourites([...favourites, recipe]);
      }
    };
  
    return (
      <main className="p-8 container">
       
        {loading ? (
          <p>Loading...</p>
        ) : (
          <RecipeList
            recipes={recipes}
            toggleFavourite={toggleFavourite}
            favourites={favourites}
          />
        )}
      </main>
    );
}
export default Home