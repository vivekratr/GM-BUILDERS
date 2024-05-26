import React, { useState, useContext, useRef } from "react";
import PluralitySocialConnect from "plurality-social-connect";
import { Context } from "../context/ContextProvider";

const AddBlog = () => {
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

  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-black pb-12">
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
      {/* navbar */}

      {/* main */}
      <div className="w-[80%] pt-7 pl-[77px] pb-10 pr-[49px] mx-auto flex flex-col  items-start justify-start relative rounded-[20px] bg-[#111] box-border  overflow-hidden text-left text-[1.375rem] text-[#7a7a7a] font-inria-serif border-[1px] border-solid border-[#282828]">
        {/* ai */}
        <div className="w-full relative flex items-center justify-end">
          <div className="w-[121px] relative rounded-[5px] box-border h-[2.813rem] overflow-hidden text-center text-[1rem] text-white font-inria-serif border-[1px] border-solid border-[#545454]">
            <div className="flex items-center justify-center w-full h-full capitalize">
              AI assistant
            </div>
          </div>
        </div>
        <div className="pb-9">
          <input
            type="text"
            placeholder="Add title"
            className="w-[35.063rem] placeholder:bg-transparent bg-transparent relative text-[2.188rem] capitalize inline-block font-inria-serif text-white placeholder:text-[#7A7A7A] p-1 text-left "
          />
        </div>

        <div className="flex gap-20 w-full">
          <img
            src={"https://i.imgur.com/Pp7qZ4p.png"}
            alt="Upload"
            className="cursor-pointer w-[300px] object-contain"
            onClick={handleImageClick}
          />
          <img
            src={selectedImage || ""}
            alt="Upload"
            className={`cursor-pointer w-[300px] object-cover ${
              selectedImage ? "" : "hidden"
            }`}
            onClick={handleImageClick}
          />
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>

        <div className="py-9 ">
          <input
            type="text"
            placeholder={`Start Writing`}
            className="w-[35.063rem]  h-[160px] placeholder:bg-transparent bg-transparent relative text-[1.5rem] capitalize inline-block font-inria-serif text-white placeholder:text-[#7A7A7A] p-1 text-left "
          />
        </div>

        <div className="py-9 ">
          <input
            type="text"
            placeholder={`Tags (*separate by comma)`}
            className="w-[25.063rem] px-5 h-[100px] placeholder:bg-transparent bg-transparent relative text-[1.5rem] capitalize inline-block font-inria-serif rounded-[5px] bg-[#2B2B2B] text-white placeholder:text-[#b0b0b0] p-1 text-left "
          />
        </div>

        <div className="flex items-center justify-end w-full">
            

        </div>
      </div>
      {/* main */}
    </div>
  );
};

export default AddBlog;
