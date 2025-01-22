import { useState,useEffect} from "react";
import RecipeList from "../RecipeList/RecipeList";
import {GridLoader} from 'react-spinners'

import axios from 'axios'

const Home= ({query}) => {
const colorStyle = 'dark:white black'
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [favourites, setFavourites] = useState([]);
    let [color, setColor] = useState(colorStyle);
    


  useEffect(() => {
    const storedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
    setFavourites(storedFavourites);
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
         ` https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}`
        );
        setRecipes(response.data.data.recipes); 
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [query]);
  
  
  const toggleFavourite = (recipe) => {
    const isFavourite = favourites.some((fav) => fav.id === recipe.id);
    let updatedFavourites;
  
    if (isFavourite) {
      updatedFavourites = favourites.filter((fav) => fav.id !== recipe.id);
    } else {
      updatedFavourites = [...favourites, recipe];
    }
  
    setFavourites(updatedFavourites);
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  }  
  
    return (
      <main className="p-8 container">
       
        {loading ? (<div className="flex justify-center items-center h-screen">
          <GridLoader color='gray' />
          </div>
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