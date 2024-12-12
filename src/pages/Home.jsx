import Banner from '../components/Banner';
import Contact from '../components/Contact/Contact';
import Faq from '../components/Faq';
import Features from '../components/Features';
import MkSlider from '../components/MkSlider';
import Stats from '../components/Stats';
import StudentTeam from '../components/StudentTeam';

const Home = () => {
  return (
    <div className='space-y-16'>
      <Banner></Banner>
      <Features></Features>
      <Stats></Stats>
      <StudentTeam></StudentTeam>
      <MkSlider></MkSlider>
      <Faq></Faq>
      <Contact></Contact>
    </div>
  );
};

export default Home;
