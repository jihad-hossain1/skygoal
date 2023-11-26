import React from "react";

const HomeBanner = () => {
  return (
    <section className="bg-[#F8F1D3]/60 ">
      <div className="max-w-screen-2xl mx-auto px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-8 md:py-20 ">
          <div>
            <h4 className="font-semibold my-3">
              Discover the beauty of the tropics
            </h4>
            <h2 className="flex flex-col gap-5 ">
              <span className="font-bold text-4xl md:text-5xl lg:text-7xl md:font-extrabold">
                Tropical
              </span>{" "}
              <span className="text-4xl font-bold  md:text-5xl lg:text-7xl md:font-extrabold">
                Destinations
              </span>{" "}
              <span className="text-4xl  md:text-5xl lg:text-7xl">
                For Student
              </span>
            </h2>
            <p className="break-all mt-8">
              Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi
              bibendum integer <br className="hidden md:block" /> rutrum nisi. A
              nec nisl vitae{" "}
            </p>
            <div className="mt-12">
              <button className="cbtn uppercase ">Sign up</button>
            </div>
          </div>
          <div className="">
            <img
              className=""
              src="https://i.ibb.co/C8YXsNS/banner.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
