import { FaArrowRight } from "react-icons/fa6";
import bannerImg from "../assets/expricences.png";
const Experiences = () => {
  return (
    <div className="my-24 max-w-screen-2xl mx-auto  flex flex-col md:flex-row items-center gap-10 px-4">
      {/* image */}
      <div className="flex-1">
        <img src={bannerImg} alt="" />
      </div>
      {/* text */}
      <div className="flex-1 px-6 lg:px-0 lg:pl-20 flex flex-col justify-center gap-6">
        <h3 className="uppercase text-yellow-600 font-bold">Experiences</h3>
        <h2 className="text-4xl font-bold my-4">
          We Provide You The Best Experience
        </h2>
        <p className="text-gray-600">
          You don’t have to worry about the result because all of these
          interiors are made by people who are professionals in their fields
          with an elegant and lucurious style and with premium quality materials
        </p>
        <button className="flex items-center gap-2 hover:gap-3  hover:text-yellow-600 cursor-pointer transition-all transform duration-300">
          More Info
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Experiences;
