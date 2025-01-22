const AddToFavourites = ({ recipe, addToFavourites }) => {
    return (
      <button
        onClick={() => addToFavourites(recipe)}
        className="bg-yellow-500 text-white px-4 py-2 rounded"
      >
        Add to Favourites
      </button>
    );
  };
  export default AddToFavourites;