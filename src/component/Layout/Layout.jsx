import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar"; 
import Footer from "../Footer/Footer"; 

const Layout = ({ setQuery }) => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Navbar setQuery={setQuery} />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default Layout;