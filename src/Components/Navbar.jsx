import React, { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const navLinks = [
    { name: "Furniture", path: "/furniture" },
    { name: "Shop", path: "/shop" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact", path: "/contact" },
  ];

  const [open, setOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`flex  z-50 top-0 left-0 right-0 items-center justify-between fixed lg:px-20 md:px-16 p-8 py-4 text-white transition-all transform duration-500 ${
        isScroll ? "bg-white text-black" : ""
      }`}
    >
      {/* logo */}
      <Link to="/">
        <h2
          className={`lg:text-2xl md:text-xl font-semibold   ${
            isScroll ? "text-black" : ""
          }`}
        >
          Panto
        </h2>
      </Link>
      {/* links */}
      <ul className={`sm:flex hidden ${isScroll ? "text-black" : ""}`}>
        {navLinks.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="ml-6  hover:border-b-2 transition-all transform duration-500"
          >
            {item.name}
          </NavLink>
        ))}
      </ul>
      {/* cart icon */}
      <Link
        to="/cart"
        className={`relative sm:flex hidden ${isScroll ? "text-black" : ""}`}
      >
        <div className="text-2xl w-8 h-8 ">
          <FaCartShopping />
        </div>
        <span className=" bottom-4 left-4 bg-amber-500 absolute px-1 rounded-full">
          0
        </span>
      </Link>
      {/* mobile menu */}
      <div
        onClick={() => setOpen(!open)}
        className={`sm:hidden text-2xl cursor-pointer ${
          isScroll ? "text-black" : ""
        }`}
      >
        {open ? (
          <ul className="absolute top-16 right-12 bg-gray-400 backdrop-blur-[2px] p-8 space-y-2 rounded text-base">
            {navLinks.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className=" block  px-4 py-2 rounded transition-all transform duration-200 hover:border-b-1"
              >
                {item.name}
              </NavLink>
            ))}
          </ul>
        ) : (
          ""
        )}
        {open ? <IoMdClose /> : <CiMenuBurger />}
      </div>
    </div>
  );
};

export default Navbar;
