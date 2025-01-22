import RecipeCard from "../RecipeCard/RecipeCard";
const RecipeList = ({ recipes, toggleFavourite, favourites }) => {
    return (
      <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            toggleFavourite={toggleFavourite}
            isFavourite={favourites.some((fav) => fav.id === recipe.id)}
            onRemove={()=>{return;}}
          />
        ))}
      </div>
    );
  };
  export default RecipeList;