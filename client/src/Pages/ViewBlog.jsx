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
    </div>
  );
};

export default ViewBlog;
