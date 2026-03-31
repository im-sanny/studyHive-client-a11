import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Main = () => {
  return (
    <div className="font-lato">
      {/* navbar */}
      <Navbar></Navbar>
      {/* outlet */}
      <div className="lg:min-h-[calc(100vh-342px)] md:lg:min-h-[calc(100vh-288px)] mx-auto max-w-6xl">
        <Outlet></Outlet>
      </div>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default Main;
