import { useState } from "react";
import { LuPlus, LuMinus } from "react-icons/lu";

const BookForm = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="max-w-screen-2xl mx-auto px-2 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div>
          <img src="https://i.ibb.co/Z2Zj7LC/another.webp" alt="" />
        </div>
        <div className="max-w-[500px] md:p-8 p-4 rounded-xl bg-[#fff] shadow">
          <div className="flex flex-col gap-5">
            <h4 className="font-extrabold text-2xl">Book now</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-8">
            <label htmlFor="city" className="uppercase font-semibold">
              city
            </label>
            <input type="text" name="city" className="cinpt" />
            <div className="flex gap-3 items-center">
              <div className="flex flex-col gap-3">
                <label htmlFor="city" className="uppercase font-semibold">
                  Arrival
                </label>
                <input type="date" name="arrival" className="cinpt" />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="city" className="uppercase font-semibold">
                  Departure
                </label>
                <input type="date" name="depature" className="cinpt " />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex flex-col gap-3">
                <label htmlFor="city" className="uppercase font-semibold">
                  star
                </label>
                <div className="flex">
                  <button
                    onClick={() => setCount(count - 1)}
                    className="rounded-l-lg bg-zinc-200/70 p-4 shadow-sm"
                  >
                    <LuMinus />
                  </button>
                  <div className="bg-zinc-200/40 py-4 px-8 shadow-sm">
                    {count}
                  </div>
                  <button
                    onClick={() => setCount(count + 1)}
                    className="rounded-r-lg bg-zinc-200/70 p-4 shadow-sm"
                  >
                    <LuPlus />
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="city" className="uppercase font-semibold">
                  Room
                </label>
                <div className="flex">
                  <button
                    onClick={() => setCount2(count2 - 1)}
                    className="rounded-l-lg bg-zinc-200/70 p-4 shadow-sm"
                  >
                    <LuMinus />
                  </button>
                  <div className="bg-zinc-200/40 py-4 px-8 shadow-sm">
                    {count2}
                  </div>
                  <button
                    onClick={() => setCount2(count2 + 1)}
                    className="rounded-r-lg bg-zinc-200/70 p-4 shadow-sm"
                  >
                    <LuPlus />
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="text-[18px] font-semibold uppercase bg-zinc-900 hover:bg-zinc-900/90 px-6 py-3 rounded-lg duration-300 transition-all text-zinc-50"
              >
                book now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookForm;
