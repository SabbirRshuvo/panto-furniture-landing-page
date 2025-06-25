import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const Main = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow justify-center flex items-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
