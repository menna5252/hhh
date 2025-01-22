import { useState } from "react";

const RecipeCard = ({ recipe, toggleFavourite, isFavourite }) => {
  const [showModal, setShowModal] = useState(false);
 console.log(recipe);
 
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden relative">
      <img
        src={recipe.image_url}
        alt={recipe.title}
        className="w-full h-40 object-cover cursor-pointer"
        onClick={() => setShowModal(true)}
      />
      <div className="p-4">
        <h2 className="text-lg font-bold">{recipe.title}</h2>
        <button
          onClick={() => toggleFavourite(recipe)}
          className={`absolute bottom-2 right-2 ${
            isFavourite ? "text-red-500" : "text-black"
          }`}
        >
          <i className="fas fa-heart"></i>
        </button>
      </div>

      {/* Modal لعرض تفاصيل الوصفة */}
      {showModal && (
        <div className="z-[1000] fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md w-11/12 max-w-md">
            <h3 className="text-xl font-bold mb-4">{recipe.title}</h3>
            <img
              src={recipe.image_url}
              alt={recipe.title}
              className="w-full h-40 object-cover mb-4"
            />
            <p>Publisher: {recipe.publisher}</p>
            <button
              className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default RecipeCard;