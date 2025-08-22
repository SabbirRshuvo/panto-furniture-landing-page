import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { reviews } from "../utility/reviwes";
import Rating from "./Rating";
const Testimonials = () => {
  return (
    <section className="section-container px-8">
      <div className="text-center mb-12">
        <h3 className="uppercase text-lg font-semibold text-yellow-600 mb-4">
          Testimonials
        </h3>
        <h2 className="capitalize text-4xl font-bold mb-4  text-center">
          Our Client Review
        </h2>
      </div>
      {/* review section */}
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide
              key={index}
              className="bg-cover bg-center rounded-xl"
              style={{
                backgroundImage: `url(${review.coverImg})`,
              }}
            >
              <div className="md:h-[547px] flex justify-center items-center mb-4">
                <div className="mt-16 mb-5 bg-white  rounded-xl md:w-4/5 w-full p-4 relative">
                  <img
                    src={review.image}
                    alt=""
                    className="size-20 absolute -top-10 left-1/2 -translate-x-1/2 ring-2 ring-yellow-400 rounded-full"
                  />
                  <div className="mt-16 text-center">
                    <h3 className="text-lg font-semibold ">{review.name}</h3>
                    <p className="mb-3 ">Verified Customer</p>
                    <p className="text-gray-500  mb-4">{review.review}</p>
                    <div className="w-full mx-auto mb-2 flex items-center justify-center text-center">
                      <Rating rating={review.rating} />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
