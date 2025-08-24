import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { ThemeProvider } from "../Context/ThemeController";
import { CartProvider } from "../Context/CartContext";

const Main = () => {
  return (
    <div className="">
      <ThemeProvider>
        <CartProvider>
          <Navbar />
          <Outlet />
          <Footer />
        </CartProvider>
      </ThemeProvider>
    </div>
  );
};

export default Main;
