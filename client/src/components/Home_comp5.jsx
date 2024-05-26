// import React from 'react'

import BackgroundImageDiv from "./BGImageDiv";

const Home_comp5 = () => {
  return <div className=" bg-black relative px-11 h-[409px] mx-auto w-[90%]">
    <BackgroundImageDiv classs={` flex items-start h-[409px] w-full justify-center p-[30px]`} imageUrl={`https://i.imgur.com/RCJuj5h.png`} >
    <div className="w-full relative box-border h-[3.625rem] overflow-hidden text-left text-[1rem] text-[#656565] font-inter border-[0.5px] border-solid border-white">
<input className="bg-transparent outline-none lowercase"/>
<img className="absolute top-[1.438rem] left-[11.438rem] w-[1.656rem] h-[0.781rem]" alt="" src="Group 1.svg" />
</div>
    </BackgroundImageDiv>

  </div>;
};

export default Home_comp5;
