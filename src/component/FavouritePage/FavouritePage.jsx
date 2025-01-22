const FavouritesPage = ({ favourites }) => {
    
    return (
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6">Your Favourites</h1>
        {favourites.length === 0 ? (
          <p>No favourites added yet!</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favourites.map((recipe) => (
              <div key={recipe.id} className="bg-white shadow-md rounded-md overflow-hidden">
                <img
                  src={recipe.image_url}
                  alt={recipe.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-bold">{recipe.title}</h2>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    );
  };
  export default FavouritesPage;