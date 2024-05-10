import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div className="font-lato">
      {/* navbar */}
      <div>
        <Navbar></Navbar>
      </div>
      {/* outlet */}
      <div className="lg:min-h-[calc(100vh-342px)] md:lg:min-h-[calc(100vh-288px)] mx-auto max-w-6xl">
        <Outlet></Outlet>
      </div>
      {/* footer */}
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
