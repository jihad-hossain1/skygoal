import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { A11y, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import { testData } from "./testData";

const Testimonial = () => {
  const [slides, setSlides] = useState(0);
  const setSlidesPerview = () => {
    setSlides(
      window.innerWidth <= 550
        ? 1
        : window.innerWidth <= 720
        ? 2
        : window.innerWidth > 720
        ? 3
        : 0
    );
  };

  useEffect(() => {
    setSlidesPerview();
    window.addEventListener("resize", setSlidesPerview);
    return () => {
      window.removeEventListener("resize", setSlidesPerview);
    };
  }, []);
  return (
    <div className="max-w-screen-2xl mx-auto px-2 py-20">
      <h4 className="font-semibold py-10 text-3xl text-center">Testimonials</h4>
      <div>
        <div>
          <Swiper
            watchSlidesProgress={true}
            slidesPerView={slides}
            className="mySwiper "
            spaceBetween={30}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
          >
            {testData?.map(({ img, message, name }, index) => (
              <SwiperSlide className="" key={index}>
                <div className="flex flex-col items-center justify-center ">
                  <img
                    className="rounded-full w-32 h-32 object-cover "
                    src={img}
                    alt=""
                  />
                  <div className="p-4 border-b border-green-800/25">
                    <h4>{name}</h4>
                  </div>
                  <div className="mt-4">
                    <p className="text-center">{message}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
