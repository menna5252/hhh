import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./component/Layout/Layout"; 
import Home from "./component/Home/Home";
import FavouritesPage from "./component/FavouritePage/FavouritePage";

const App = () => {
  const [query, setQuery] = useState("pasta");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout setQuery={setQuery} />, 
      children: [
        {
          path: "/",
          element: <Home query={query} />,
        },
        {
          path: "/favourites",
          element: <FavouritesPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
export default App;