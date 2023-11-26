import React from "react";
import { Link } from "react-router-dom";

const Discount = () => {
  return (
    <div className="max-w-screen-2xl mx-auto py-20 px-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div>
          <h4 className="font-semibold text-xl">Get 20% off for student</h4>
          <div className="flex flex-col gap-3">
            <span className="font-bold text-4xl">
              Student discounts available.
            </span>
            <span className="font-[400] text-3xl">
              Get ready for some fun in the sun!
            </span>
          </div>
          <ul className="ml-6 mt-10 flex flex-col gap-3 list-disc">
            <li>Lorem ipsum dolor sit</li>
            <li>amet Massa quis natoque sit</li>
            <li>quam Eros non pellentesque elit</li>
            <li>tortor id euismod habitant Sed </li>
            <li>suspendisse id in ultrices</li>
          </ul>
          <div className="mt-16">
            <Link to={"#"} className="cbtn">
              Explore More
            </Link>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/rHjpHQ3/disc.webp" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Discount;
