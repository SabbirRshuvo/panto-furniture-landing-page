import contactBg from "../assets/contact-background.jpg";
import { Materials } from "../Components/Materials";
import Testimonials from "../Components/Testimonials";

const Contact = () => {
  return (
    <>
      <div
        className="pt-20 bg-cover bg-center bg-no-repeat h-[600px] flex justify-center items-center text-4xl font-bold text-white "
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        <h2 className="underline text-gray-800">About Us</h2>
      </div>
      <Materials />
      <Testimonials />
    </>
  );
};

export default Contact;
