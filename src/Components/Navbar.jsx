import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router";

const Navbar = () => {
  const navLinks = [
    { name: "Furniture", path: "/furniture" },
    { name: "Shop", path: "/shop" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <div className="max-w-screen-2xl mx-auto flex justify-between items-center z-10">
      {/* logo */}
      <div>
        <h2 className="text-2xl font-semibold">Panto</h2>
      </div>
      {/* links */}
      <ul className="flex">
        {navLinks.map((item, index) => (
          <NavLink to={item.path} key={index} className="ml-6">
            {item.name}
          </NavLink>
        ))}
      </ul>
      {/* cart icon */}
      <div className="relative">
        <div className="text-2xl ">
          <FaCartShopping />
        </div>
        <span className="absolute bottom-2 left-4">0</span>
      </div>
    </div>
  );
};

export default Navbar;
