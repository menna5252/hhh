import React, { useState } from "react";
import SearchSidebar from "../SearchSidebar/SearchSidebar";
import RecipeDetails from "../RecipeDetails/RecipeDetails";
import FavouritesList from "../FavouritesList/FavouritesList";

const Main = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null); // الوصفة المختارة
  const [favourites, setFavourites] = useState([]); // قائمة المفضلة

  const addToFavourites = (recipe) => {
    if (!favourites.some((fav) => fav.id === recipe.id)) {
      setFavourites([...favourites, recipe]);
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
      <SearchSidebar setSelectedRecipe={setSelectedRecipe} />
      <div className="flex-1 flex flex-col md:flex-row">
        <RecipeDetails recipe={selectedRecipe} addToFavourites={addToFavourites} />
        <FavouritesList favourites={favourites} />
      </div>
    </div>
  );
};
export default Main;