import banner from "../assets/banner.png";
import Products from "../Components/Products";
const Shop = () => {
  return (
    <section className="min-h-screen">
      {/* banner */}
      <div
        className="w-full h-[600px] bg-cover bg-center relative flex justify-center items-center text-white"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h1 className="text-4xl font-bold">Shop Our Products</h1>
      </div>
      <Products headline="What your choice" />
    </section>
  );
};

export default Shop;
