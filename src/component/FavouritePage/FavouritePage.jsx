import { useEffect, useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";

const FavouritePage = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const storedFavourites = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(storedFavourites);
  }, []);

  const removeFromFavourites = (recipe) => {
    const updatedFavourites = favourites.filter((fav) => fav.id !== recipe.id);
    setFavourites(updatedFavourites);
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  };

  return (
    <div>
      <h1 className="text-center py-4 text-2xl font-bold dark:text-white">Your Favourites</h1>
      {favourites.length === 0 ? (
        <p className="dark:text-white ps-5">No favourite recipes yet.</p>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 container px-8 pb-10">
          {favourites.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              isFavourite={true}
              toggleFavourite={()=>{return;}}
              onRemove={() => removeFromFavourites(recipe)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default FavouritePage;