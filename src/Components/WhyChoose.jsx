import icon from "../../src/assets/button-icon.png";

const WhyChoose = () => {
  return (
    <div className="  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-screen-2xl mx-auto gap-8 text-left md:my-24 my-16 p-6">
      <div>
        <h2 className="text-4xl font-semibold text-gray-600 w-2/3 leading-tight">
          Why Choosing Us
        </h2>
      </div>
      <div>
        <h4 className="text-xl font-medium ">Luxury fatiliteis</h4>
        <p className="text-gray-600 leading-relaxed md:w-full w-2/3 py-2">
          The advantage of hiring a workspace with us is that givees you
          comfortable service and all-around facilities.
        </p>
        <div className="flex items-center gap-4 cursor-pointer text-amber-500">
          <p className="font-medium ">More Info</p>
          <img src={icon} alt="" />
        </div>
      </div>
      <div>
        <h4 className="text-xl font-medium ">Affordable Price</h4>
        <p className="text-gray-600 leading-relaxed md:w-full w-2/3 py-2">
          You can get a workspace of the highst quality at an affordable price
          and still enjoy the facilities that are oly here.
        </p>
        <div className="flex items-center gap-4 cursor-pointer text-amber-500">
          <p className="font-medium ">More Info</p>
          <img src={icon} alt="" />
        </div>
      </div>
      <div>
        <h4 className="text-xl font-medium ">Many Choices</h4>
        <p className="text-gray-600 leading-relaxed md:w-full w-2/3 py-2">
          We provide many unique work space choices so that you can choose the
          workspace to your liking.
        </p>
        <div className="flex items-center gap-4 cursor-pointer text-amber-500">
          <p className="font-medium ">More Info</p>
          <img src={icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
