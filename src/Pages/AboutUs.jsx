import aboutBg from "../assets/about-background.jpg";
import Experiences from "../Components/Experiences";
const AboutUs = () => {
  return (
    <>
      <div
        className="pt-20 bg-cover bg-center bg-no-repeat h-[600px] flex justify-center items-center text-4xl font-bold text-white "
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <h2 className="underline ">Contact Us</h2>
      </div>
      <Experiences />
    </>
  );
};

export default AboutUs;
