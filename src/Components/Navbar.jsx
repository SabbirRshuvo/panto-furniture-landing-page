import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router";

const Navbar = () => {
  const navlinks = [
    { name: "Furniture", path: "/furniture" },
    { name: "Shop", path: "/shop" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <div>
      {/* logo */}
      <div>
        <h2>Panto</h2>
      </div>
      {/* links */}
      <div>
        {navlinks.map((item, index) => (
          <NavLink to={item.path} key={index}>
            {item.name}
          </NavLink>
        ))}
      </div>
      {/* cart icon */}
      <div>
        <FaCartShopping />
      </div>
    </div>
  );
};

export default Navbar;
