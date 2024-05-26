import React from "react";
import BackgroundImageDiv from "./BGImageDiv";

const Home_comp6 = () => {
  return (
    <div className="relative w-full h-screen px-5">
      <BackgroundImageDiv
        classs={``}
        imageUrl={"https://i.imgur.com/skamSMs.png"}
      >
        <div className="relative w-full flex justify-center top-[26.7rem]">
          <div className="flex items-center justify-between w-[450px]">
            <img className=" cursor-pointer w-[122px] h-[40px] " src="https://i.imgur.com/NgsaSip.png" alt="" />
            <img className=" cursor-pointer w-[50px] h-[79px] " src="https://i.imgur.com/7tEataB.png" alt="" />
            <img className=" cursor-pointer w-[106px] h-[106px] " src="https://i.imgur.com/LHHnc78.png" alt="" />
          </div>
        </div>
      </BackgroundImageDiv>
    </div>
  );
};

export default Home_comp6;
