import React from "react";

const Home_comp2 = () => {
  return (
    <div className="bg-black">
      <div
        style={{ gridTemplateRows: `260px 360px 314px auto` }}
        className="grid grid-cols-12 pt-[63px] gap-[25px] w-[97%] mx-auto p-1 "
      >
        {/* 1st row */}
        <div className=" col-span-6 ">
          <b className="w-[43.688rem] relative text-[5.125rem] capitalize inline-block font-inria-serif text-white text-left">
            Trending Articles and news
          </b>
        </div>
      </div>
    </div>
  );
};

export default Home_comp2;
