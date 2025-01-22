import React, { useState } from "react";

const SearchSidebar = ({ setSelectedRecipe }) => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  const fetchRecipes = async () => {
    if (search.trim()) {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`
      );
      const data = await res.json();
      setRecipes(data.data.recipes);
    }
  };

  return (
    <aside className="w-full md:w-1/4 p-4 bg-white shadow-md">
      <div className="mb-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search recipes..."
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          onClick={fetchRecipes}
          className="w-full bg-green-500 text-white px-4 py-2 rounded mt-2"
        >
          Search
        </button>
      </div>
      <div>
        <h3 className="font-bold mb-2">Recipes:</h3>
        <ul>
          {recipes.map((recipe) => (
            <li
              key={recipe.id}
              onClick={() => setSelectedRecipe(recipe)}
              className="p-2 border-b cursor-pointer hover:bg-gray-100"
            >
              {recipe.title}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
export default SearchSidebar;