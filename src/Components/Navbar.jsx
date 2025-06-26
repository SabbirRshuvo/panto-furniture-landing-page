import { Link, NavLink } from "react-router";
import { FaBagShopping, FaBars } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
const navLinks = [
  { name: "Furniture", path: "/furniture" },
  { name: "Shop", path: "/shop" },
  { name: "About Us", path: "/about-us" },
  { name: "Contact", path: "/contact" },
];

const navLinkStyle = ({ isActive }) =>
  isActive ? "text-amber-600 font-bold border-b-2" : "hover:text-amber-500";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll");
  }, []);
  return (
    <div
      className={`shadow-lx  fixed top-0 left-0 right-0 z-50  transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent text-white"
      }`}
    >
      <div className="flex justify-between container mx-auto max-w-screen-2xl items-center py-4 px-4">
        {/* logo */}
        <Link to="/" className="text-2xl font-bold ">
          <h2>Panto</h2>
        </Link>
        {/* links */}
        <div className="hidden md:flex">
          <ul className="flex space-x-8">
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
        <div className="relative hidden md:flex cursor-pointer">
          <FaBagShopping className="text-2xl " />
          <sup className="absolute top-0 -right-3 bg-amber-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
            0
          </sup>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer md:hidden text-2xl "
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* mobile device dropdown menu */}
        {isOpen && (
          <div className="absolute top-20 right-4 w-[75%]  rounded-lg p-4 bg-gray-600 shadow-md md:hidden">
            <ul className="flex flex-col space-y-4 text-base font-medium">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={navLinkStyle}
                    onClick={() => setIsOpen(false)} // close after click
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Cart Icon for Mobile */}
            <Link
              to="/"
              className="relative flex mt-4 justify-end cursor-pointer"
            >
              <FaBagShopping className="text-2xl " />
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
