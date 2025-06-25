import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { FaBagShopping, FaBars, FaBreadSlice } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Furniture", path: "/furniture" },
  { name: "Shop", path: "/shop" },
  { name: "About Us", path: "/about-us" },
  { name: "Contact", path: "/contact" },
];

const navLinkStyle = ({ isActive }) =>
  isActive
    ? "text-yellow-600 font-semibold border-b-2"
    : "hover:text-yellow-500";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" shadow-xl bg-white sticky top-0 z-50">
      <div className="flex justify-between container mx-auto py-4 px-4 items-center max-w-screen-2xl relative">
        <Link to="/" className="text-2xl font-bold text-gray-600">
          Panto
        </Link>
        {/* desktop menu */}
        <div className="hidden md:flex">
          <ul className="flex space-x-6 font-medium ">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink to={link.path} className={navLinkStyle}>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        {/* cart icon */}
        <Link to="/" className="relative hidden md:flex">
          <FaBagShopping className="text-2xl text-gray-600 " />
          <sup className="absolute top-0 -right-3 bg-amber-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
            0
          </sup>
        </Link>
        {/* mobile device */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex md:hidden cursor-pointer text-2xl text-gray-600"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        {isOpen && (
          <div className="absolute   top-20 right-4 w-[75%] bg-slate-200 rounded-lg p-4 shadow md:hidden ">
            <ul className="flex flex-col space-x-6 space-y-4   p-4 text-base font-medium">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink to={link.path} className={navLinkStyle}>
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* cart icon for mobile */}

            <Link to="/" className="relative flex mt-4 justify-end">
              <FaBagShopping className="text-2xl text-gray-600 " />
              <sup className="absolute -top-2 -right-2 bg-amber-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
                0
              </sup>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
