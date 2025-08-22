import { FaArrowRight } from "react-icons/fa6";
import image1 from "../assets/material1.png";
import image2 from "../assets/material2.png";
import image3 from "../assets/material3.png";
export const Materials = () => {
  return (
    <div className="my-24 max-w-screen-2xl mx-auto  flex flex-col md:flex-row items-center gap-10 px-4">
      {/* text */}
      <div className="flex-1 px-6 lg:px-0 lg:pl-20 flex flex-col justify-center gap-6">
        <h3 className="uppercase text-yellow-600 font-bold">Materials</h3>
        <h2 className="text-4xl font-bold my-4">
          Very serious materials for making furniture
        </h2>
        <p className="text-gray-600">
          Because panto was very serious about designing furniture for our
          environment, using a very expensive and famous capital but at a
          relatively low price
        </p>
        <button className="flex items-center gap-2 hover:gap-3  hover:text-yellow-600 cursor-pointer transition-all transform duration-300">
          More Info
          <FaArrowRight />
        </button>
      </div>
      {/* image */}
      <div className="flex-1 grid grid-cols-2 md:grid-cols-3 md:items-end items-center">
        <div className="">
          <img src={image1} alt="" />
          <img src={image2} alt="" />
        </div>
        <div className="col-span-1 md:col-span-2">
          <img src={image3} alt="" className="w-full " />
        </div>
      </div>
    </div>
  );
};
