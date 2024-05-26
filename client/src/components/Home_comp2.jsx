import React from "react";
import BackgroundImageDiv from "./BGImageDiv";

const Home_comp2 = () => {
  return (
    <div className="bg-black">
      <div
        style={{ gridTemplateRows: `260px 360px 314px auto` }}
        className="grid grid-cols-12 pt-[63px] gap-[55px] px-[43px] w-[100%] mx-auto p-1 "
      >
        {/* 1st row */}
        <div className=" col-span-6 ">
          <b className="w-[43.688rem] relative text-[5.125rem] capitalize inline-block font-inria-serif text-white text-left">
            Trending Articles and news
          </b>
        </div>
        <div className="col-span-6 relative">
          <BackgroundImageDiv imageUrl="https://i.imgur.com/QIH7Ngd.png" />

          <div className="flex flex-col gap-4 items-end justify-start p-3">
            <div className="w-[80px] relative rounded-[47px] bg-[#FFFFFFA3] box-border h-[1.438rem] text-left text-[1rem] text-black font-inter border-[0.5px] border-solid border-white">
              <div className="flex items-center justify-center capitalize font-medium">
                Article
              </div>
            </div>

            <b className="w-[19.938rem] relative text-[1.5rem] capitalize inline-block font-inria-serif text-white text-left">
              Is web 3 future of Internet ?
            </b>

            <div className="w-[30.875rem] relative text-[1rem] capitalize font-inria-serif text-darkgray text-left inline-block">
              Lorem ipsum dolor sit amet consectetur. Sagittis urna adipiscing
              convallis pellentesque blandit facilisis.
            </div>

            <div className="w-[5.625rem] relative text-[1rem] capitalize font-inria-serif text-white text-left inline-block">
              23 may 2024
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_comp2;
