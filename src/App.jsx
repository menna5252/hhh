import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import Home from "./component/Home/Home";
import FavouritesPage from "./component/FavouritePage/FavouritePage";

const App = () => {
  const [favourites, setFavourites] = useState([]);
  const [query, setQuery] = useState("pasta");
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar  setQuery={setQuery}/>
        <div className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={<Home favourites={favourites} setFavourites={setFavourites} query={query} />}
            />
            <Route
              path="/favourites"
              element={<FavouritesPage favourites={favourites} />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};
export default App;