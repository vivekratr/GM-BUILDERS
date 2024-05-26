// import React from 'react'

import BackgroundImageDiv from "./BGImageDiv";

const Home_comp5 = () => {
  return <div className=" bg-black px-11 mx-auto w-full">
    <BackgroundImageDiv classs={` flex items-start justify-center p-[30px]`} imageUrl={``} >
    <div className="w-full relative box-border h-[3.625rem] overflow-hidden text-left text-[1rem] text-dimgray font-inter border-[0.5px] border-solid border-white">
<input className="absolute top-[1.188rem] left-[1rem] lowercase">enter your email</input>
<img className="absolute top-[1.438rem] left-[11.438rem] w-[1.656rem] h-[0.781rem]" alt="" src="Group 1.svg" />
</div>
    </BackgroundImageDiv>

  </div>;
};

export default Home_comp5;
