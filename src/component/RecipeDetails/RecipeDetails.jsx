import AddToFavourites from "../AddToFavourite/AddToFavourite";

const RecipeDetails = ({ recipe, addToFavourites }) => {
  if (!recipe) {
    return (
      <section className="flex-1 p-4">
        <h2 className="text-2xl font-bold mb-4">
          Select a recipe to view details
        </h2>
      </section>
    );
  }

  return (
    <section className="flex-1 p-4">
      <h2 className="text-2xl font-bold mb-4">{recipe.title}</h2>
      <img
        src={recipe.image_url}
        alt={recipe.title}
        className="w-full max-w-md mb-4"
      />
      <p className="mb-4">Published by: {recipe.publisher}</p>
      <AddToFavourites recipe={recipe} addToFavourites={addToFavourites} />
    </section>
  );
};
export default RecipeDetails;