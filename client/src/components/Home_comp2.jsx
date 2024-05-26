import React from "react";
import BackgroundImageDiv from "./BGImageDiv";

const Home_comp2 = () => {
  return (
    <div className="bg-black">
      <div
        style={{ gridTemplateRows: `292px 360px 314px auto` }}
        className="grid grid-cols-12 pt-[63px] gap-[45px] px-[43px] w-[100%] mx-auto p-1 "
      >
        {/* 1st row */}
        <div className=" col-span-6 ">
          <b className="w-[43.688rem] relative text-[5.025rem] capitalize inline-block font-inria-serif text-white text-left">
            Trending Articles and news
          </b>
        </div>
        <div className="col-span-6 relative">
          <BackgroundImageDiv classs={'border-[1px] border-solid border-[#3b3b3b]'} imageUrl="https://i.imgur.com/QIH7Ngd.png">
            <div className="flex flex-col  items-start justify-end h-full p-3">
              <div className="w-[80px] relative rounded-[47px] bg-[#FFFFFFA3] box-border h-[1.438rem] text-left text-[1rem] text-black font-inter border-[0.5px] border-solid border-white">
                <div className="flex items-center justify-center capitalize font-medium">
                  Article
                </div>
              </div>

              <b className="w-[19.938rem] relative pt-3 text-[1.5rem] capitalize inline-block font-inria-serif text-white text-left">
                Is web 3 future of Internet ?
              </b>

              <div className="w-[30.875rem] pt-3 relative text-[1rem] capitalize font-inria-serif text-[#a8a8a8] text-left inline-block">
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

        {/* 1st col */}
        <div className="col-span-6 relative">
          <BackgroundImageDiv classs={'border-[1px] border-solid border-[#3b3b3b]'} imageUrl="https://i.imgur.com/p1CFttI.png">
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

        <div className="col-span-4 relative">
          <BackgroundImageDiv classs={'border-[1px] border-solid border-[#3b3b3b]'} imageUrl="https://i.imgur.com/0vAeccP.png">
            <div className="flex flex-col  items-start justify-end h-full p-3">
              <div className="w-[80px] relative rounded-[47px] bg-[#FFFFFF00] box-border h-[1.438rem] text-left text-[1rem] text-white font-inter border-[0.5px] border-solid border-white">
                <div className="flex items-center justify-center capitalize font-medium">
                  Article
                </div>
              </div>

              <b className="w-[97%] pt-3 relative text-[1.5rem] capitalize inline-block font-inria-serif text-white text-left">
                U.S. Credit Unions Adopt Tokenization of Real World Assets
              </b>

              <div className="w-[85%] pt-3 relative text-[1rem] capitalize font-inria-serif text-[#A8A8A8] text-left inline-block">
                Lorem ipsum dolor sit amet consectetur. Sagittis urna adipiscing
                convallis pellentesque blandit facilisis.
              </div>

              <div className="w-full pt-3 flex justify-end relative text-[1rem] capitalize font-inria-serif text-white text-left ">
                23 may 2024
              </div>
            </div>
          </BackgroundImageDiv>
        </div>

        {/* 3rd row */}

        <div className="col-span-2 relative">
          <BackgroundImageDiv classs={'border-[1px] border-solid border-[#3b3b3b]'} imageUrl="https://i.imgur.com/B8HPy6z.png">
            <div className="flex flex-col  items-start justify-end h-full p-3">
              <div className="w-[80px] rounded-[47px] bg-[#FFFFFF00] box-border h-[1.438rem] text-left text-[1rem] text-white font-inter border-[0.5px] border-solid border-white">
                <div className="flex items-center justify-center capitalize ">
                  Blog
                </div>
              </div>

              <b className="w-[97%] pt-3 relative text-[1.5rem] capitalize inline-block font-inria-serif text-white text-left">
                What is NFT?
              </b>

              <div className="w-[85%] pt-3 relative text-[1rem] capitalize font-inria-serif text-white text-left inline-block">
                Lorem ipsum dolor sit amet consectetur. Sagittis urna s.
              </div>

              <div className="w-full pt-3 flex justify-end relative text-[1rem] capitalize font-inria-serif text-white text-left ">
                23 may 2024
              </div>
            </div>
          </BackgroundImageDiv>
        </div>

        {/* 3rd row */}

        {/* 1st column */}
        <div className="relative col-span-3">
          {" "}
          <BackgroundImageDiv classs={'border-[1px] border-solid border-[#3b3b3b]'} imageUrl="https://i.imgur.com/LUBoYjI.png">
            <div className="flex flex-col  items-start justify-end h-full p-3">
              <div className="w-[80px] rounded-[47px] bg-[#FFFFFF00] box-border h-[1.438rem] text-left text-[1rem] text-white font-inter border-[0.5px] border-solid border-white">
                <div className="flex items-center justify-center capitalize ">
                  News
                </div>
              </div>

              <b className="w-[97%] pt-3 relative text-[1.5rem] capitalize inline-block font-inria-serif text-white text-left">
                What is NFT?
              </b>

              <div className="w-[85%] pt-3 relative text-[1rem] capitalize font-inria-serif text-white text-left inline-block">
                Lorem ipsum dolor sit amet consectetur. Sagittis urna s.
              </div>

              <div className="w-full pt-3 flex justify-end relative text-[1rem] capitalize font-inria-serif text-white text-left ">
                23 may 2024
              </div>
            </div>
          </BackgroundImageDiv>
        </div>
        <div className="relative col-span-3">
          {" "}
          <BackgroundImageDiv classs={'border-[1px] border-solid border-[#3b3b3b]'} imageUrl="https://i.imgur.com/cmKslBj.png">
            <div className="flex flex-col  items-start justify-end h-full p-3">
              <div className="w-[80px] rounded-[47px] bg-[#FFFFFF00] box-border h-[1.438rem] text-left text-[1rem] text-white font-inter border-[0.5px] border-solid border-white">
                <div className="flex items-center justify-center capitalize ">
                  News
                </div>
              </div>

              <b className="w-[97%] pt-3 relative text-[1.5rem] capitalize inline-block font-inria-serif text-white text-left">
                What is NFT?
              </b>

              <div className="w-[85%] pt-3 relative text-[1rem] capitalize font-inria-serif text-white text-left inline-block">
                Lorem ipsum dolor sit amet consectetur. Sagittis urna s.
              </div>

              <div className="w-full pt-3 flex justify-end relative text-[1rem] capitalize font-inria-serif text-white text-left ">
                23 may 2024
              </div>
            </div>
          </BackgroundImageDiv>
        </div>
        <div className="relative col-span-6">
          {" "}
          <BackgroundImageDiv classs={'border-[1px] border-solid border-[#3b3b3b]'} imageUrl="https://i.imgur.com/EsEpHvK.png">
            <div className="flex flex-col  items-start justify-end h-full p-3">
              <div className="w-[80px] rounded-[47px] bg-[#FFFFFF00] box-border h-[1.438rem] text-left text-[1rem] text-white font-inter border-[0.5px] border-solid border-white">
                <div className="flex items-center justify-center capitalize ">
                  News
                </div>
              </div>

              <b className="w-[97%] pt-3 relative text-[1.5rem] capitalize inline-block font-inria-serif text-white text-left">
                What is NFT?
              </b>

              <div className="w-[85%] pt-3 relative text-[1rem] capitalize font-inria-serif text-white text-left inline-block">
                Lorem ipsum dolor sit amet consectetur. Sagittis urna s.
              </div>

              <div className="w-full pt-3 flex justify-end relative text-[1rem] capitalize font-inria-serif text-white text-left ">
                23 may 2024
              </div>
            </div>
          </BackgroundImageDiv>
        </div>
      </div>

      <div className="flex py-5 items-center justify-center w-full">
        <b className="w-[6.188rem] relative text-[1.25rem] capitalize inline-block font-inria-serif text-white text-left">
          Read More
        </b>
        <img
          className=" relative max-w-full overflow-hidden w-[1.75rem] h-[1.75rem] object-contain"
          alt="arrow"
          src="https://i.imgur.com/CI4EIog.png"
        />
      </div>
    </div>
  );
};

export default Home_comp2;
