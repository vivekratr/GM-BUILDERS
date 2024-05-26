// import React from 'react'

import BackgroundImageDiv from "./BGImageDiv"

const Home_comp4 = () => {
  return (
    <div
    style={{ gridTemplateRows: `530px  auto` }}
    className="grid grid-cols-12 bg-black pb-[150px] pt-[90px] gap-[48px] px-[43px] w-[100%] mx-auto p-1 "
  >
    {/* 1st column */}
    <div className="relative col-span-4">
        <BackgroundImageDiv classs={'border-[1px] border-solid border-[#3b3b3b]'} imageUrl={`https://i.imgur.com/n9yeXKZ.png`}>
        <div className="flex flex-col justify-start items-start p-[29px]">
        <div className="w-full relative [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000_50.9%)] h-[15.563rem]" />
        <div className="flex">
            <img className="w-[39px] h-[35px] object-cover " src="https://i.imgur.com/uGTI2Yp.png" alt="" />
            <div className="w-[9.813rem] relative text-[1.188rem] capitalize font-inter text-[#7C7C7C] text-left inline-block">recommendation</div>
        </div>
        </div>
        </BackgroundImageDiv>

    </div>
    {/* 2nd column */}
    <div className="relative col-span-4">

    </div>
    {/* 3rd column */}
    <div className="relative col-span-4">

    </div>

  </div>
  )
}

export default Home_comp4
