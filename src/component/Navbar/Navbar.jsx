import { Link, useLocation } from "react-router-dom";
import { useState,useEffect } from "react";

const Navbar = ({ setQuery}) => {
  const savedDarkMode = localStorage.getItem("darkMode") === "true"; 
  console.log(savedDarkMode)
  const [darkMode, setDarkMode] = useState(savedDarkMode);
  const location = useLocation();
 
    useEffect(() => {
     
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

   
  return (
    <nav className="bg-gray-800 dark:bg-gray-200 text-white dark:text-black  py-4 px-8 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">
        Forkify
      </Link>
      <div className="flex gap-4 items-center">
     
        {location.pathname !== "/favourites" && (
          <input
            type="text"

            placeholder="Search recipes..."
            className="px-4 py-2 rounded-md border border-gray-500 text-black"
            onChange={(e) => setQuery(e.target.value)}
          />
        )}
        <Link to="/favourites" className="relative text-white dark:text-gray-800 text-xl">
          <i className="fas fa-heart"></i>
        </Link>
       
        <button onClick={() => setDarkMode(!darkMode)} className="text-xl">
  {darkMode ? (
   <i className="fas fa-sun"></i> 
  ) : (
    
    <i className="fas fa-moon"></i> 
  )}
</button>
      </div>
    </nav>
  );
};
export default Navbar;