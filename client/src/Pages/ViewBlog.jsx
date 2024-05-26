import React, { useState, useContext } from "react";
import PluralitySocialConnect from "plurality-social-connect";
import { Context } from "../context/ContextProvider";

const ViewBlog = () => {
  const {
    handleProfileDataReturned,
    handleGetAllAccounts,
    handleGetConnectedAccount,
    handleMessageSignature,
    handleVerifyMessageSignature,
    handleGetBalance,
    handleSendTransaction,
    handleGetBlockNumber,
    handleGetTransactionCount,
    handleReadFromContract,
    handleWriteToContract,
    handleErrorMessage,
    // renderData,
    profileData,
    childRef,
  } = useContext(Context);

  const [isConnected, setIsConnected] = useState(false);

  const hiddenButtonWrapperRef = React.useRef(null);

  const handleVisibleButtonClick = () => {
    if (hiddenButtonWrapperRef.current) {
      const hiddenButton =
        hiddenButtonWrapperRef.current.querySelector("button");
      if (hiddenButton) {
        hiddenButton.click();
      }
    }
  };

  return (
    <div>
      {/* navbar */}
      <div className="flex justify-between items-center bg-black p-[18px]">
        <div className=" w-[128px] h-[103px] object-cover ">
          <img src="https://i.imgur.com/VSXWSCv.png" alt="" />
        </div>

        {/* wallet */}
        <div>
          <div className="w-[186px]">
            {/* hidden button */}
            <div ref={hiddenButtonWrapperRef} style={{ display: "none" }}>
              <PluralitySocialConnect
                options={{ apps: "facebook,twitter" }}
                onProfileDataReturned={async (d) => {
                  await handleProfileDataReturned(d);
                  setIsConnected(true);
                }}
                onGetAllAccounts={handleGetAllAccounts}
                onGetConnectedAccount={handleGetConnectedAccount}
                onGetMessageSignature={handleMessageSignature}
                onVerifyMessageSignature={handleVerifyMessageSignature}
                onGetBalance={handleGetBalance}
                onSendTransaction={handleSendTransaction}
                onGetBlockNumber={handleGetBlockNumber}
                onGetTransactionCount={handleGetTransactionCount}
                onReadFromContract={handleReadFromContract}
                onWriteToContract={handleWriteToContract}
                onErrorMessage={handleErrorMessage}
                // all customization params are optional
                customization={{
                  height: "30px",
                  width: "156px",
                  initialBackgroundColor: "#E8A123",
                  initialTextColor: "#FFFFFF",
                  flipBackgroundColor: "#12AE83",
                  flipTextColor: "#FFFFFF",
                }}
                ref={childRef}
              />
            </div>
            {/* showing button */}

            <div
              onClick={handleVisibleButtonClick}
              className="rounded-lg cursor-pointer w-full flex items-center justify-evenly relative box-border h-[3.25rem] overflow-hidden text-left text-[1.125rem] text-white font-inter border-[0.5px] border-solid border-[#FFFFFF4D]"
            >
              <img
                className={`flex items-center justify-center  object-cover ${
                  isConnected
                    ? `rounded-full w-[2rem]`
                    : `w-[1.188rem] h-[1.875rem]`
                }`}
                alt=""
                src={
                  isConnected
                    ? `${profileData.profileUrl}`
                    : `https://i.imgur.com/85UVZQv.png`
                }
              />
              <div className="flex items-center justify-center uppercase font-light">
                {isConnected ? `${profileData.name}` : `Connect`}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* blog content */}
      <div className="bg-black">
        <div className=" w-[1050px] mx-auto bg-black ">
          <div className="flex flex-col justify-center items-start ">
            <b className="w-[98%] relative text-[2.188rem] capitalize inline-block font-inria-serif text-white text-left">
              U.S. Credit Unions Adopt Tokenization of Real World Assets
            </b>

            <div className="flex w-full mb-[37px] justify-between">
              <div className="flex gap-4 items-center justify-center">
                <img
                  className=" w-11 h-11 object-cover"
                  src="https://i.imgur.com/ooOn9TK.png"
                  alt=""
                />

                <div className="flex flex-col items-start justify-center w-max">
                  <div className="min-w-[8.813rem] relative text-[1.375rem] capitalize font-medium font-inter text-white text-left inline-block">
                    Aditya kumar
                  </div>
                  <div className="flex gap-6 items-center justify-between ">
                    <div className="w-[5.563rem] relative text-[1rem] lowercase font-inter text-[#888888] text-left inline-block">
                      2 mins read
                    </div>
                    <div className="w-[6.313rem] relative text-[1rem] capitalize font-inter text-[#888888] text-left inline-block">
                      23 May 2024
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <img
                  className="w-[34px] h-[34px] object-cover "
                  src="https://i.imgur.com/wQnCdVP.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="mb-20">
            <img
              className="w-full object-cover"
              src="https://i.imgur.com/p1CFttI.png"
              alt=""
            />
          </div>

          <div>
            <div className="w-full mb-[64px] relative text-[1.375rem] lowercase font-times-new-roman text-white text-justify inline-block">
              <p className="m-0">
                Lorem ipsum dolor sit amet consectetur. Lorem turpis id sem eu
                enim sapien pharetra. At posuere elementum sed integer viverra
                malesuada purus. Malesuada sagittis enim dui id tellus imperdiet
                in risus non. Amet sed elementum amet amet pellentesque tortor
                sagittis. Sed vel viverra curabitur nec tellus urna congue
                posuere. Facilisis tristique sollicitudin ut urna. Ultrices
                dolor platea maecenas nibh justo non amet semper.
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                Dolor magna pretium pulvinar nulla facilisis hac id placerat
                vitae. Augue nunc commodo netus lacus diam velit purus ipsum
                diam. Lobortis lectus diam sit vel eu nulla eget in. A luctus
                iaculis dolor viverra dignissim ultrices sed. Vitae mi metus mi
                amet urna arcu morbi libero. Leo vitae ullamcorper nunc orci
                viverra molestie vitae. Mattis ac ultricies molestie libero.
                Sapien dapibus vitae tempor eleifend est blandit nisi. Eu et
                tincidunt facilisis tellus nibh id sed egestas vitae. Quisque
                pretium sed libero sem molestie. Mi morbi sed semper tellus.
                Vitae sit nec ac sollicitudin. Diam tellus est ac sed senectus.
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                Rhoncus dignissim pretium mauris varius enim nisl posuere.
                Tristique tempus enim euismod enim nulla nisl. Proin sed
                imperdiet morbi hendrerit ultrices pharetra id nunc duis. At
                donec amet id enim. Dictumst sit dolor odio duis in rhoncus.
                Ipsum dictum etiam lacus nullam at porttitor eu. Non nisl eu
                facilisi platea dictumst ut.
              </p>
            </div>
          </div>
          <div className="w-[80%] mb-[106px] relative text-[1.375rem] lowercase font-times-new-roman text-justify inline-block text-white">
            <span>{`refences - `}</span>
            <span className="text-[#6978FF]">
              rhoncus. Ipsum dictum etiam lacus nullam at porttitor e
            </span>
          </div>

          <div className="grid">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBlog;
