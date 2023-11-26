import React from "react";
import { tropicalData } from "./tropicalData";
import { Link } from "react-router-dom";

const Tropical = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-2">
      <div className="my-20 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-4 md:gap-7">
          {tropicalData.map(({ img, name, details }, index) => (
            <div
              key={index}
              className="w-fit p-4 md:p-7 rounded-xl shadow bg-[#FFF] flex items-center gap-2"
            >
              <img
                className="object-cover w-20 h-20 rounded-full"
                src={img}
                alt=""
              />
              <div>
                <h4 className="font-semibold">{name}</h4>
                <p className="break-all">{details}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h4 className="flex flex-col gap-3 text-3xl">
            <span className="font-bold">Tropical Adventure</span>
            <span>for Students.</span>
          </h4>
          <h4 className="font-semibold mt-4">
            Student Tropical Vacation: Relax and Recharge
          </h4>
          <ul className="list-disc ml-5 flex flex-col gap-3 mt-4">
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Masse quis netoque sit quem</li>
            <li>sit amet consectetur adipisicing elit.</li>
            <li> Dolor voluptate ducimus illo adipisicing.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
          <div className="mt-16">
            <Link to={"#"} className="cbtn">
              Explore More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tropical;
