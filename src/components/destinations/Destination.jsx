import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
// import "./styles.css";

import { Grid, Pagination } from "swiper/modules";
import { destData } from "./destData";
import CaroselButton from "./CaroselButton";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineStarPurple500 } from "react-icons/md";

const Destination = () => {
  const [slides, setSlides] = useState(0);
  const setSlidesPerview = () => {
    setSlides(
      window.innerWidth <= 550
        ? 1
        : window.innerWidth <= 720
        ? 2
        : window.innerWidth > 720
        ? 4
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
    <div className="max-w-screen-2xl mx-auto pt-12 px-2">
      <h4 className="font-semibold text-3xl my-8">Our Destinations</h4>
      <div>
        <div>
          <Swiper
            slidesPerView={slides}
            spaceBetween={30}
            modules={[Pagination, Grid]}
            className="mySwiper"
          >
            {destData?.map(
              ({ img, title, location, rating, status }, index) => (
                <SwiperSlide
                  key={index}
                  className="bg-[#fff] shadow-lg rounded-lg"
                >
                  <div className="relative">
                    <img
                      className="h-[400px] w-full rounded-lg object-cover "
                      src={img}
                      alt=""
                    />
                    <div className="relative -mt-16 flex justify-between items-center p-4">
                      <div className="shadow w-fit bg-zinc-50 rounded-full py-1 px-4 flex gap-2 items-center">
                        <MdOutlineStarPurple500 className="text-yellow-500" />{" "}
                        <h4>{rating}</h4>
                      </div>
                      <div className="w-fit text-sm px-4 rounded-full py-1 bg-zinc-900 text-zinc-50 uppercase">
                        {status}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 mt-4 p-4">
                    <h4 className="text-xl font-bold">{title}</h4>
                    <div className="flex justify-between items-center">
                      <p className="md:text-md text-sm font-semibold">
                        {location}
                      </p>
                      <button className="rounded-full bg-zinc-200/70 p-4">
                        <BsThreeDots />
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              )
            )}

            <div className="">
              <CaroselButton />
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Destination;
