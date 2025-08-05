import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";
import { MdArrowRightAlt } from "react-icons/md";

const ChooseUs = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-8 lg:py-20 md:py-16 sm:py-12 py-8 max-w-screen-2xl mx-auto gap-6">
      <div className="flex justify-center items-center ">
        <h2 className="md:text-4xl sm:text-3xl text-2xl font-semibold ">
          Why Choosing Us
        </h2>
      </div>
      <div>
        <h3 className="md:text-2xl sm:text-xl font-semibold ">
          Luxury facilities
        </h3>
        <p className="text-gray-600 lg:text-base sm:text-sm md:my-4 my-2">
          The advantage of hiring a workspace with us is that gives you
          comfortable service and all-around facilities.
        </p>
        <button className="text-sm flex items-center gap-2 hover:gap-4 cursor-pointer transition-all duration-300">
          {" "}
          View More
          <HiOutlineArrowRight className="text-amber-600 text-xl" />
        </button>
      </div>
      <div>
        <h3 className="md:text-2xl sm:text-xl font-semibold md:my-4 my-2">
          Affordable Price
        </h3>
        <p className="text-gray-600 lg:text-base sm:text-sm md:my-4 my-2">
          You can get a workspace of the highest quality at an affordable price
          and still enjoy the facilities that are oly here.
        </p>
        <button className="text-sm flex items-center gap-2 hover:gap-4 cursor-pointer transition-all duration-300">
          {" "}
          View More
          <HiOutlineArrowRight className="text-amber-600 text-xl" />
        </button>
      </div>
      <div>
        <h3 className="md:text-2xl sm:text-xl font-semibold md:my-4 my-2">
          Many Choices
        </h3>
        <p className="text-gray-600 lg:text-base sm:text-sm md:my-4 my-2">
          We provide many unique work space choices so that you can choose the
          workspace to your liking.
        </p>
        <button className="text-sm flex items-center gap-2 hover:gap-4 cursor-pointer transition-all duration-300">
          {" "}
          View More
          <HiOutlineArrowRight className="text-amber-600 text-xl" />
        </button>
      </div>
    </div>
  );
};

export default ChooseUs;
