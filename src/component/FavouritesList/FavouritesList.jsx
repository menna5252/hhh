const FavouritesList = ({ favourites }) => {
    return (
      <aside className="w-full md:w-1/4 p-4 bg-white shadow-md">
        <h3 className="font-bold mb-2">Favourites:</h3>
        <ul>
          {favourites.map((fav) => (
            <li key={fav.id} className="p-2 border-b">
              {fav.title}
            </li>
          ))}
        </ul>
      </aside>
    );
  };
  export default FavouritesList;