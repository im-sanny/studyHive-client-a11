import Banner from "../components/Banner";
import Faq from "../components/Faq";
import Features from "../components/Features";
import MkSlider from "../components/MkSlider";
import Stats from "../components/Stats";
import StudentTeam from "../components/StudentTeam";

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div>
        <Features></Features>
      </div>
      <div>
        <Stats></Stats>
      </div>
      <div>

      <StudentTeam></StudentTeam>
      </div>
      <div>
        <MkSlider></MkSlider>
      </div>
      <div>
        <Faq></Faq>
      </div>
    </div>
  );
};

export default Home;
