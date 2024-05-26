/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./css/BlogSection.css";
import BackgroundImageDiv from "../components/BGImageDiv";

const BlogSection = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
    <div className="bg-black">
      <div>
        <Navbar />
      </div>

      {/* search bar */}
      <div className="bg-black flex w-full items-center pb-12 justify-center">
        <div className="container-input">
          <input
            type="text"
            placeholder="Search"
            name="text"
            className="input"
          />
          <svg
            fill="#000000"
            width="20px"
            height="20px"
            viewBox="0 0 1920 1920"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      {/* search bar */}

      {/* Toggle Buttons */}
      <div className="flex mb-[60px] pb-4 border-b-[0.1px] border-solid border-white transition-all duration-150 w-[1140px] mx-auto min-h-[62px] text-[1.125rem] capitalize font-medium font-inter text-white text-left gap-x-12 items-center justify-evenly">
        <button
          className={`focus:outline-none transition-all duration-200  ${
            activeButton === "Recommended For You" ? "" : " "
          }`}
          onClick={() => handleButtonClick("Recommended For You")}
        >
          Recommended For You
          <div
            className={` relative box-border top-[1.6rem] transition-all mx-auto duration-200 h-[0.031rem] border-t-[3px] border-solid border-white border-b-2 ${
              activeButton === "Recommended For You"
                ? " w-full border-white"
                : "w-0 "
            }`}
          />
        </button>
        <button
          className={`focus:outline-none transition-all relative duration-200  ${
            activeButton === "Trending" ? "" : " "
          }`}
          onClick={() => handleButtonClick("Trending")}
        >
          Trending
          <div
            className={` relative box-border top-[1.6rem] transition-all mx-auto duration-200 h-[0.031rem] border-t-[3px] border-solid border-white border-b-2 ${
              activeButton === "Trending" ? " w-full border-white" : "w-0 "
            }`}
          />
        </button>
        <button
          className={`focus:outline-none transition-all duration-200 ${
            activeButton === "Crypto" ? "" : " "
          }`}
          onClick={() => handleButtonClick("Crypto")}
        >
          Crypto
          <div
            className={` relative box-border top-[1.6rem] transition-all mx-auto duration-200 h-[0.031rem] border-t-[3px] border-solid border-white border-b-2 ${
              activeButton === "Crypto" ? " w-full border-white" : "w-0 "
            }`}
          />
        </button>
        <button
          className={`focus:outline-none transition-all duration-200 ${
            activeButton === "Web 3.0" ? "" : " "
          }`}
          onClick={() => handleButtonClick("Web 3.0")}
        >
          Web 3.0
          <div
            className={` relative box-border top-[1.6rem] transition-all mx-auto duration-200 h-[0.031rem] border-t-[3px] border-solid border-white border-b-2 ${
              activeButton === "Web 3.0" ? " w-full border-white" : "w-0 "
            }`}
          />
        </button>
        <button
          className={`focus:outline-none transition-all duration-200 ${
            activeButton === "Technology" ? "" : " "
          }`}
          onClick={() => handleButtonClick("Technology")}
        >
          Technology
          <div
            className={` relative box-border top-[1.6rem] transition-all mx-auto duration-200 h-[0.031rem] border-t-[3px] border-solid border-white border-b-2 ${
              activeButton === "Technology" ? " w-full border-white" : "w-0 "
            }`}
          />
        </button>
        <button
          className={`focus:outline-none transition-all duration-200 ${
            activeButton === "Gaming" ? "" : " "
          }`}
          onClick={() => handleButtonClick("Gaming")}
        >
          Gaming
          <div
            className={` relative box-border top-[1.6rem] transition-all mx-auto duration-200 h-[0.031rem] border-t-[3px] border-solid border-white border-b-2 ${
              activeButton === "Gaming" ? " w-full border-white" : "w-0 "
            }`}
          />
        </button>
        <button
          className={`focus:outline-none transition-all duration-200 ${
            activeButton === "Funding" ? "" : " "
          }`}
          onClick={() => handleButtonClick("Funding")}
        >
          Funding
          <div
            className={` relative box-border top-[1.6rem] transition-all mx-auto duration-200 h-[0.031rem] border-t-[3px] border-solid border-white border-b-2 ${
              activeButton === "Funding" ? " w-full border-white" : "w-0 "
            }`}
          />
        </button>
      </div>
      {/* Toggle Buttons */}

      {/* cards */}
      <div
        style={{ gridTemplateRows: ` 360px 360px 320px  auto` }}
        className="grid grid-cols-12 bg-black pb-[150px]   gap-x-[25px] gap-y-[33px] w-[1200px] mx-auto p-1 "
      >
        {/* 1st row */}
        {/* 1st column */}
        <div className="relative col-span-7">
          <div className="w-full relative [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000_50.9%)] h-[15.563rem]" />
          <BackgroundImageDiv
            classs={"border-[1px] border-solid border-[#3b3b3b]"}
            imageUrl="https://i.imgur.com/p1CFttI.png"
          >
            <div className="flex flex-col  items-start justify-end h-full p-3">
              <div className="w-[80px] relative rounded-[47px] bg-[#FFFFFFA3] box-border h-[1.438rem] text-left text-[1rem] text-black font-inter border-[0.5px] border-solid border-white">
                <div className="flex items-center justify-center capitalize font-medium">
                  Article
                </div>
              </div>

              <b className="w-[90%] relative pt-3 text-[1.5rem] capitalize inline-block font-inria-serif text-white text-left">
                Is web 3 future of Internet ?
              </b>

              <div className="w-[90%] pt-3 relative text-[1rem] capitalize font-inria-serif text-[#a8a8a8] text-left inline-block">
                Lorem ipsum dolor sit amet consectetur. Sagittis urna adipiscing
                convallis pellentesque blandit facilisis.
              </div>

              <div className="w-full flex justify-end relative text-[1rem] capitalize font-inria-serif text-white text-left ">
                23 may 2024
              </div>
            </div>
          </BackgroundImageDiv>
        </div>
        {/* 2nd column */}
        <div className="relative col-span-5">
          <div className="w-full relative [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000_50.9%)] h-[15.563rem]" />
          <BackgroundImageDiv
            classs={"border-[1px] border-solid border-[#3b3b3b]"}
            imageUrl="https://i.imgur.com/0vAeccP.png"
          >
            <div className="flex flex-col  items-start justify-end h-full p-3">
              <div className="w-[80px] relative rounded-[47px] bg-[#FFFFFFA3] box-border h-[1.438rem] text-left text-[1rem] text-black font-inter border-[0.5px] border-solid border-white">
                <div className="flex items-center justify-center capitalize font-medium">
                  Article
                </div>
              </div>

              <b className="w-[90%] relative pt-3 text-[1.5rem] capitalize inline-block font-inria-serif text-white text-left">
                Is web 3 future of Internet ?
              </b>

              <div className="w-[90%] pt-3 relative text-[1rem] capitalize font-inria-serif text-[#a8a8a8] text-left inline-block">
                Lorem ipsum dolor sit amet consectetur. Sagittis urna adipiscing
                convallis pellentesque blandit facilisis.
              </div>

              <div className="w-full flex justify-end relative text-[1rem] capitalize font-inria-serif text-white text-left ">
                23 may 2024
              </div>
            </div>
          </BackgroundImageDiv>
        </div>

        {/* 2nd row */}
        {/* 1st column */}
        <div className="relative col-span-4">
          <div className="w-full relative [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000_50.9%)] h-[15.563rem]" />
          <BackgroundImageDiv
            classs={"border-[1px] border-solid border-[#3b3b3b]"}
            imageUrl="https://i.imgur.com/0vAeccP.png"
          >
            <div className="flex flex-col  items-start justify-end h-full p-3">
              <div className="w-[80px] relative rounded-[47px] bg-[#FFFFFFA3] box-border h-[1.438rem] text-left text-[1rem] text-black font-inter border-[0.5px] border-solid border-white">
                <div className="flex items-center justify-center capitalize font-medium">
                  Article
                </div>
              </div>

              <b className="w-[90%] relative pt-3 text-[1.5rem] capitalize inline-block font-inria-serif text-white text-left">
                Is web 3 future of Internet ?
              </b>

              <div className="w-[90%] pt-3 relative text-[1rem] capitalize font-inria-serif text-[#a8a8a8] text-left inline-block">
                Lorem ipsum dolor sit amet consectetur. Sagittis urna adipiscing
                convallis pellentesque blandit facilisis.
              </div>

              <div className="w-full flex justify-end relative text-[1rem] capitalize font-inria-serif text-white text-left ">
                23 may 2024
              </div>
            </div>
          </BackgroundImageDiv>
        </div>
        {/* 2nd column */}
        <div className="relative col-span-4">
          <div className="w-full relative [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000_50.9%)] h-[15.563rem]" />
          <BackgroundImageDiv
            classs={"border-[1px] border-solid border-[#3b3b3b]"}
            imageUrl="https://i.imgur.com/0vAeccP.png"
          >
            <div className="flex flex-col  items-start justify-end h-full p-3">
              <div className="w-[80px] relative rounded-[47px] bg-[#FFFFFFA3] box-border h-[1.438rem] text-left text-[1rem] text-black font-inter border-[0.5px] border-solid border-white">
                <div className="flex items-center justify-center capitalize font-medium">
                  Article
                </div>
              </div>

              <b className="w-[90%] relative pt-3 text-[1.5rem] capitalize inline-block font-inria-serif text-white text-left">
                Is web 3 future of Internet ?
              </b>

              <div className="w-[90%] pt-3 relative text-[1rem] capitalize font-inria-serif text-[#a8a8a8] text-left inline-block">
                Lorem ipsum dolor sit amet consectetur. Sagittis urna adipiscing
                convallis pellentesque blandit facilisis.
              </div>

              <div className="w-full flex justify-end relative text-[1rem] capitalize font-inria-serif text-white text-left ">
                23 may 2024
              </div>
            </div>
          </BackgroundImageDiv>
        </div>
        {/* 3rd column */}
        <div className="relative col-span-4">
          <div className="w-full relative [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000_50.9%)] h-[15.563rem]" />
          <BackgroundImageDiv
            classs={"border-[1px] border-solid border-[#3b3b3b]"}
            imageUrl="https://i.imgur.com/B8HPy6z.png"
          >
            <div className="flex flex-col  items-start justify-end h-full p-3">
              <div className="w-[80px] relative rounded-[47px] bg-[#FFFFFFA3] box-border h-[1.438rem] text-left text-[1rem] text-black font-inter border-[0.5px] border-solid border-white">
                <div className="flex items-center justify-center capitalize font-medium">
                  Article
                </div>
              </div>

              <b className="w-[90%] relative pt-3 text-[1.5rem] capitalize inline-block font-inria-serif text-white text-left">
                Is web 3 future of Internet ?
              </b>

              <div className="w-[90%] pt-3 relative text-[1rem] capitalize font-inria-serif text-[#a8a8a8] text-left inline-block">
                Lorem ipsum dolor sit amet consectetur. Sagittis urna adipiscing
                convallis pellentesque blandit facilisis.
              </div>

              <div className="w-full flex justify-end relative text-[1rem] capitalize font-inria-serif text-white text-left ">
                23 may 2024
              </div>
            </div>
          </BackgroundImageDiv>
        </div>

        {/* 3rd row */}
        {/* 1st column */}
        <div className="relative col-span-4 p-1">
          <div className="flex flex-col ">
            <div className="flex">
              <img
                className="w-7 h-7 object-value"
                src="https://i.imgur.com/2rUV7WM.png"
                alt=""
              />
              <div className="w-[14.875rem] relative text-[1rem] capitalize font-inria-serif text-left inline-block text-white">
                <span>Emmett Chen-Ran ·</span>
                <span className="text-dimgray">3 days ago</span>
              </div>
              <img
                className="w-9 h-9 object-value"
                src="https://i.imgur.com/gBgyZBw.png"
                alt=""
              />
              <img
                className="w-7 h-[25px] object-value"
                src="https://i.imgur.com/L1lxGis.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* cards */}
    </div>
  );
};

export default BlogSection;
