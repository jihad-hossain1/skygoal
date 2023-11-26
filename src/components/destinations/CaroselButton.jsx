import { useSwiper } from "swiper/react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { destData } from "./destData";
import { useState } from "react";
const CaroselButton = () => {
  const swiper = useSwiper();
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <div className="swiper-nav-btns flex justify-center items-center gap-4 mt-10  ">
        <button
          className="text-slate-700  text-3xl rounded-md px-6 py-1"
          onClick={() => swiper.slidePrev()}
        >
          <BsArrowLeft />
        </button>
        <div className="font-semibold">{destData.length}</div>
        <button
          className="text-slate-700  text-3xl rounded-md px-6 py-1"
          onClick={() => swiper.slideNext()}
        >
          <BsArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CaroselButton;
