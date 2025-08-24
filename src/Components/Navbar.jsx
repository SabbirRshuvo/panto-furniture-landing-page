import React, { useContext, useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { Link, NavLink } from "react-router";
import { CartContext } from "../Context/CartContext";

const Navbar = () => {
  const navLinks = [
    { name: "Furniture", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact", path: "/contact" },
  ];

  const [open, setOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const blackText = ["/about-us", "/contact"];

  const isBlackText = blackText.includes(location.pathname);

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

  const { cartCount } = useContext(CartContext);
  console.log(cartCount);
  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 lg:px-20 py-4 transition-all duration-300 
    ${
      isScroll
        ? "bg-white text-black shadow"
        : isBlackText
        ? "bg-transparent text-black"
        : "bg-transparent text-white"
    }`}
    >
      {/* Logo */}
      <Link to="/">
        <h2 className="text-xl md:text-2xl font-bold tracking-wide">Panto</h2>
      </Link>

      {/* Desktop menu */}
      <ul className="hidden sm:flex gap-6 font-medium">
        {navLinks.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={({ isActive }) =>
              `hover:border-b-2 border-current transition-all duration-300 ${
                isActive ? "font-semibold" : ""
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </ul>

      {/* Cart */}
      <Link to="/cart" className="hidden sm:flex relative">
        <FaCartShopping className="text-2xl" />
        <span className="absolute -top-2 -right-2 bg-amber-500 text-xs text-white px-1 rounded-full">
          {cartCount}
        </span>
      </Link>

      {/* Mobile menu toggle */}
      <div
        onClick={() => setOpen(!open)}
        className="sm:hidden text-2xl cursor-pointer"
      >
        {open ? <IoMdClose /> : <CiMenuBurger />}
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="absolute top-16 left-0 w-full bg-white text-black flex flex-col items-center gap-4 py-6 shadow-md sm:hidden transition-all duration-300">
          {navLinks.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              onClick={() => setOpen(false)}
              className="block w-full text-center py-2 hover:bg-gray-200 rounded"
            >
              {item.name}
            </NavLink>
          ))}
          <Link
            to="/cart"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 py-2 hover:bg-gray-200 rounded w-full justify-center"
          >
            <FaCartShopping /> <span>Cart {cartCount}</span>
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
