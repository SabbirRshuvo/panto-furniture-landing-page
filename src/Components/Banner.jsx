import { CiSearch } from "react-icons/ci";
import bannerImg from "../assets/banner.png";
const Banner = () => {
  return (
    <div
      className="h-screen bg-cover relative bg-center text-white"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div>
        <h2 className="text-4xl md:text-6xl font-medium md:w-1/2 mx-auto text-center lg:pt-44 md:pt-36 pt-32 leading-tight">
          Make your interior more minimalistic & modern
        </h2>
        <p className="text-gray-300 text-base md:w-1/2 mx-auto py-4 leading-relaxed text-center">
          Turn your room with panto into a lot more minimalist and modern with
          ease and speed
        </p>
        {/* search */}
        <div className="flex items-center justify-center mt-4">
          <div className="w-md relative">
            <input
              type="text"
              placeholder="Search Furniture"
              className="focus:outline-none pl-5 pr-12 bg-white/15 py-2 w-full rounded-full"
            />
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-amber-700 rounded-full p-2 cursor-pointer
            "
            >
              <CiSearch size={24} />
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-40 left-24 group ">
        <button className="relative p-4 bg-white/25 rounded-full border-1 text-xl">
          <div className="hidden absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 p-2 space-x-1 rounded-lg bg-white/25 shadow-md group-hover:flex">
            <div className="size-6 bg-red-700 border border-white rounded-full"></div>
            <div className="size-6 bg-green-700 border border-white rounded-full"></div>
            <div className="size-6 bg-blue-700 border border-white rounded-full"></div>
            {/* arrow */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white"></div>
          </div>
        </button>
      </div>
      <div className="md:inline-block hidden absolute bottom-40 right-24 group ">
        <button className="relative p-4 bg-white/25 rounded-full border-1 text-xl">
          <div className="hidden absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 p-2 space-x-1 rounded-lg bg-white/25 shadow-md group-hover:flex">
            <div className="size-6 bg-red-700 border border-white rounded-full"></div>
            <div className="size-6 bg-green-700 border border-white rounded-full"></div>
            <div className="size-6 bg-blue-700 border border-white rounded-full"></div>
            {/* arrow */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white"></div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Banner;
