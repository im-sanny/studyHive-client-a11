import Banner from "../components/Banner";
import Faq from "../components/Faq";
import Features from "../components/Features";
import MkSlider from "../components/MkSlider";
import Stats from "../components/Stats";

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
        <Faq></Faq>
      </div>
      <div>
        <Stats></Stats>
      </div>
      <div>
        <MkSlider></MkSlider>
      </div>
    </div>
  );
};

export default Home;
