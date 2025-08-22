import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mt-20  text-black bg-slate-200 px-20 pt-24 pb-4 ">
      <div className="  gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center space-y-4 text-sm">
        <div>
          <h2 className="text-2xl font-semibold">Panto</h2>
          <p className="text-gray-600 mt-4">
            The advantage of hiring a workspace with us is that givees you
            comfortable service and all-around facilities.
          </p>
        </div>
        <div>
          <p className="text-amber-600 font-semibold ">Services</p>
          <ul className="text-gray-600 space-y-2 mt-4">
            <li>Email Marketing</li>
            <li>Campaigns</li>
            <li>Branding</li>
            <li>Offline Marketing</li>
          </ul>
        </div>
        <div>
          <p className="text-amber-600 font-semibold">Furniture</p>
          <ul className="text-gray-600 space-y-2 mt-4">
            <li>Living Room</li>
            <li>Bedroom</li>
            <li>Office</li>
            <li>Kitchen</li>
          </ul>
        </div>
        <div>
          <p className="text-amber-600 font-semibold">Follow Us</p>
          <ul className="text-gray-600 space-y-2 mt-4">
            <li className="flex items-center gap-2">
              {" "}
              <FaFacebook className="text-blue-600" /> Facebook
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <FaTwitter className="text-blue-700" /> Twitter
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <FaInstagram className="text-orange-700" /> Instagram
            </li>
            <li className="flex items-center gap-2">
              <FaLinkedin className="text-blue-700" /> LinkedIn
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between mt-4 text-gray-600 text-sm">
        <p>© 2025 Panto.</p>
        <span>All rights reserved. | Privacy Policy | Terms of Service</span>
      </div>
    </footer>
  );
};

export default Footer;
