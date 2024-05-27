import React from "react";
import Navbar from "../components/Navbar";
import BackgroundImageDiv from "../components/BGImageDiv";

const Profile = () => {
  const [activeButton, setActiveButton] = React.useState(null);
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="bg-black ">
      <div className="mb-[54px]">
        <Navbar />
      </div>
      <div className="w-[90%] mx-auto relative rounded-[14px] bg-[#1a1a1a] pt-[31px] pl-[34px] pb-9 pr-4 grid grid-cols-12  overflow-hidden text-left text-[1rem] text-white font-inter ">
        <div className=" col-span-7">
          <div className="w-[100%] grid grid-cols-12 gap-6 ">
            <div className="col-span-5">
              <img
                src="https://i.imgur.com/TP6GXuh.png"
                className=" w-full object-contain "
                alt=""
              />
            </div>
            <div className="col-span-7 flex flex-col gap-4">
              <div className="flex gap-4">
                <div className="flex flex-col">
                  <b className="w-[10.75rem] relative text-[1.625rem] inline-block font-inter text-white text-left">
                    Aditya Kumar
                  </b>
                  <div className="w-[10.125rem] relative text-[1.25rem] font-inter text-[#757575] text-left inline-block">
                    @adityakumar.zk
                  </div>
                </div>
                <div className="w-[125px] relative rounded-[40px] bg-gray box-border h-[2.563rem] overflow-hidden text-left text-[1rem] text-white font-inter border-[1px] border-solid border-darkslategray">
                  <div className="flex h-full items-center justify-center font-medium">
                    Edit Profile
                  </div>
                </div>
              </div>
              <div className="w-[5.75rem] relative text-[1.125rem] font-inter text-white text-left inline-block">{` Developer `}</div>
              <div className="w-[7.375rem] relative text-[1.125rem] font-inter text-white text-left inline-block">
                I like blogging
              </div>

              <div className="flex gap-[6px] items-center justify-start">
                <img src="https://i.imgur.com/3b6hK3V.png" alt="" />
                <div className="w-[12.875rem] relative text-[1.125rem] font-inter text-[#757575] text-left inline-block">
                  Joined September 2023
                </div>
              </div>

              <div className="flex gap-[6px] items-center justify-start">
                <div className="w-[2.063rem] relative text-[1.125rem] font-inter text-white text-left inline-block">
                  700
                </div>
                <div className="w-[9.063rem] relative text-[1.125rem] font-inter text-[#8C8C8C] text-left inline-block">
                  Reputation score
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-5">
          <div className="w-full h-full flex justify-end">
            <div className="w-[270px] flex flex-col items-center p-4 justify-normal relative rounded-2xl [background:linear-gradient(180.13deg,_#202020,_#000)] box-border h-[15.95rem] overflow-hidden text-left text-[1rem] text-[#777] font-inter border-t-[2px] border-solid border-[#282828] border-r-[1px] border-l-[1px]">
              <div className="w-[7.125rem] relative text-[1rem] capitalize font-medium font-inter mb-[22px] text-[#777777] text-left inline-block">
                Your GM Coins
              </div>
              <img
                className=" mb-[32px] w-[95px] object-contain"
                src="https://i.imgur.com/g7sG0sW.png"
                alt=""
              />
              <div className="w-[104px] relative rounded-md [background:linear-gradient(106.75deg,_#fdd835,_#fff_49.15%,_#ffd000)] h-[1.938rem] overflow-hidden text-left text-[0.875rem] text-black font-inter">
                <div className="h-full flex items-center justify-center font-medium">
                  10 coins
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* user's article */}
      {/* toggle button */}
      <div className="flex pb-20 my-[80px] transition-all duration-150 w-[1140px]  min-h-[62px] text-[1.125rem] capitalize font-medium font-inter text-white text-left gap-x-12 items-center justify-start px-[100px]">
        <button
          className={`focus:outline-none transition-all duration-200  ${
            activeButton === "Recommended For You" ? "" : " "
          }`}
          onClick={() => handleButtonClick("Recommended For You")}
        >
          Your Article
          <div
            className={` relative box-border top-[6px] transition-all mx-auto duration-200 h-[0.031rem] border-t-[1px] border-solid border-white border-b-1 ${
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
          Saved Article
          <div
            className={` relative box-border top-[6px] transition-all mx-auto duration-200 h-[0.031rem] border-t-[1px] border-solid border-white border-b-1 ${

              activeButton === "Trending" ? " w-full border-white" : "w-0 "
            }`}
          />
        </button>
      </div>
      <div style={{ gridTemplateRows: `360px auto` }} className="grid py-20 w-[90%] mx-auto grid-cols-12 pt-[63px] gap-[45px]">
         {/* 1st col */}
         <div className="col-span-7 relative">
          <BackgroundImageDiv
            classs={""}
            imageUrl="https://i.imgur.com/p1CFttI.png"
          >
            <div className="flex flex-col  items-start justify-end h-full p-3">
              <div className="w-[80px] relative rounded-[47px] bg-[#FFFFFF00] box-border h-[1.438rem] text-left text-[1rem] text-white font-inter border-[0.5px] border-solid border-white">
                <div className="flex items-center justify-center capitalize font-medium">
                  Article
                </div>
              </div>

              <b className="w-[97%] pt-3 relative text-[1.5rem] capitalize inline-block font-inria-serif text-white text-left">
                U.S. Credit Unions Adopt Tokenization of Real World Assets
              </b>

              <div className="w-[85%] pt-3 relative text-[1rem] capitalize font-inria-serif text-white text-left inline-block">
                Lorem ipsum dolor sit amet consectetur. Sagittis urna adipiscing
                convallis pellentesque blandit facilisis.
              </div>

              <div className="w-full pt-3 flex justify-end relative text-[1rem] capitalize font-inria-serif text-white text-left ">
                23 may 2024
              </div>
            </div>
          </BackgroundImageDiv>
        </div>
         {/* 2nd col */}
         <div className="col-span-5 relative">
          <BackgroundImageDiv
            // classs={"border-[1px] border-solid border-[#3b3b3b]"}
            imageUrl="https://i.imgur.com/p1CFttI.png"
          >
            <div className="flex flex-col  items-start justify-end h-full p-3">
              <div className="w-[80px] relative rounded-[47px] bg-[#FFFFFF00] box-border h-[1.438rem] text-left text-[1rem] text-white font-inter border-[0.5px] border-solid border-white">
                <div className="flex items-center justify-center capitalize font-medium">
                  Article
                </div>
              </div>

              <b className="w-[97%] pt-3 relative text-[1.5rem] capitalize inline-block font-inria-serif text-white text-left">
                U.S. Credit Unions Adopt Tokenization of Real World Assets
              </b>

              <div className="w-[85%] pt-3 relative text-[1rem] capitalize font-inria-serif text-white text-left inline-block">
                Lorem ipsum dolor sit amet consectetur. Sagittis urna adipiscing
                convallis pellentesque blandit facilisis.
              </div>

              <div className="w-full pt-3 flex justify-end relative text-[1rem] capitalize font-inria-serif text-white text-left ">
                23 may 2024
              </div>
            </div>
          </BackgroundImageDiv>
        </div>

      </div>
    </div>
  );
};

export default Profile;
