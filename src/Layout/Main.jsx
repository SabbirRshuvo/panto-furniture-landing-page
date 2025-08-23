import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { ThemeProvider } from "../Context/ThemeController";

const Main = () => {
  return (
    <div className="">
      <ThemeProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default Main;
