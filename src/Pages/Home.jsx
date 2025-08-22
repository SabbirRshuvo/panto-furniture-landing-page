import Banner from "../Components/Banner";
import ChooseUs from "../Components/ChooseUs";
import Experiences from "../Components/Experiences";
import { Materials } from "../Components/Materials";
import Products from "../Components/Products";
import Testimonials from "../Components/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <ChooseUs />
      <Products headline="What your choice" />
      <Experiences />
      <Materials />
      <Testimonials />
    </div>
  );
};

export default Home;
