import Banner from "../Components/Banner";
import ChooseUs from "../Components/ChooseUs";
import Products from "../Components/Products";

const Home = () => {
  return (
    <div>
      <Banner />
      <ChooseUs />
      <Products headline="What your choice" />
    </div>
  );
};

export default Home;
