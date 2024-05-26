/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./css/BlogSection.css";

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
      <div className="flex pb-4 border-b-[0.1px] border-solid border-white transition-all duration-150 w-[1040px] mx-auto min-h-[62px] text-[1.125rem] capitalize font-medium font-inter text-white text-left gap-x-12 items-center justify-evenly">
        <button
          className={`focus:outline-none transition-all duration-200  ${
            activeButton === "Recommended For You"
              ? "border-b-2 border-white"
              : ""
          }`}
          onClick={() => handleButtonClick("Recommended For You")}
        >
          Recommended For You
          <div
            className={` relative box-border top-[1.6rem] transition-all mx-auto duration-200 h-[0.031rem] border-t-[3px] border-solid border-white border-b-2 ${
              activeButton === "Trending" ? " w-full border-white" : "w-0 "
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
          className={`focus:outline-none ${
            activeButton === "Crypto" ? "border-b-2 border-white" : ""
          }`}
          onClick={() => handleButtonClick("Crypto")}
        >
          Crypto
        </button>
        <button
          className={`focus:outline-none ${
            activeButton === "Web 3.0" ? "border-b-2 border-white" : ""
          }`}
          onClick={() => handleButtonClick("Web 3.0")}
        >
          Web 3.0
        </button>
        <button
          className={`focus:outline-none ${
            activeButton === "Technology" ? "border-b-2 border-white" : ""
          }`}
          onClick={() => handleButtonClick("Technology")}
        >
          Technology
        </button>
        <button
          className={`focus:outline-none ${
            activeButton === "Gaming" ? "border-b-2 border-white" : ""
          }`}
          onClick={() => handleButtonClick("Gaming")}
        >
          Gaming
        </button>
        <button
          className={`focus:outline-none ${
            activeButton === "Funding" ? "border-b-2 border-white" : ""
          }`}
          onClick={() => handleButtonClick("Funding")}
        >
          Funding
        </button>
      </div>
      {/* Toggle Buttons */}

      {/* cards */}
      <div>sadasdad</div>
      {/* cards */}
    </div>
  );
};

export default BlogSection;
