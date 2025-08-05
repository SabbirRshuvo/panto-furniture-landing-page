import { FaSearch } from "react-icons/fa";
import banner from "../assets/banner.png";
const Banner = () => {
  return (
    <div
      className="bg-cover bg-center h-screen relative flex justify-center items-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="text-white flex flex-col ">
        <h2 className="md:text-4xl flex-wrap w-3/4 mx-auto sm:text-2xl text-xl">
          Make your interior more minimalistic & modern
        </h2>
        <p className="py-4 text-gray-200 md:text-base w-3/4 mx-auto text-sm  ">
          Turn your room with panto into a lot more minimalist and modern with
          ease and speed
        </p>
        {/* search field */}
        <div className="border  border-gray-400 bg-gray-100   z-10 w-70 h-8 mx-auto relative items-center rounded-2xl md:w-110 sm:w-96 mt-10">
          <input
            type="text"
            placeholder="Search Furniture..."
            className="focus:outline-none px-6 text-sm text-start py-1 text-black"
          />
          <div className="absolute top-1/2 -translate-1/2 -right-4 bg-amber-400 p-2 rounded-full ">
            <FaSearch />
          </div>
        </div>
        {/* hover color section */}

        <div className="absolute bottom-20">
          <div className="relative group flex items-center justify-center h-20">
            {/* hidden color section */}
            <div className="absolute top-[-10px] opacity-0 flex gap-2 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-red-500 w-4 h-4 rounded-full" />
              <div className="bg-green-500 w-4 h-4 rounded-full" />
              <div className="bg-blue-500 w-4 h-4 rounded-full" />
            </div>

            {/* bg section */}
            <div className="bg-gray-300  w-10 h-10 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
