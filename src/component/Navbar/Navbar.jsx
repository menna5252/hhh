import { Link, useLocation } from "react-router-dom";

const Navbar = ({ setQuery }) => {
  const location = useLocation(); // الحصول على المسار الحالي

  return (
    <nav className="bg-gray-800 text-white py-4 px-8 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">
        Forkify
      </Link>
      <div className="flex gap-4 items-center">
        {/* إخفاء مربع البحث إذا كان المسار هو /favourites */}
        {location.pathname !== "/favourites" && (
          <input
            type="text"

            placeholder="Search recipes..."
            className="px-4 py-2 rounded-md border border-gray-500 text-black"
            onChange={(e) => setQuery(e.target.value)}
          />
        )}
        <Link to="/favourites" className="text-red-400 text-xl">
          <i className="fas fa-heart"></i>
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;