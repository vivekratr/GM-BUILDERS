// import React from 'react'

import BackgroundImageDiv from "./BGImageDiv"

const Home_comp4 = () => {
  return (
    <div
    style={{ gridTemplateRows: `530px  auto` }}
    className="grid grid-cols-12 pb-[150px] pt-[90px] gap-[48px] px-[43px] w-[100%] mx-auto p-1 "
  >
    {/* 1st column */}
    <div className="relative col-span-4">
        <BackgroundImageDiv imageUrl={``}>
        <div className="flex flex-col justify-start items-start p-[29px]">
        <div className="flex">
            <img src="" alt="" />
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
