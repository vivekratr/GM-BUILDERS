import React, { useState, useEffect, useContext, useRef } from "react";
import PluralitySocialConnect from "plurality-social-connect";
import { Context } from "../context/ContextProvider";

const AddBlog = () => {
  const {
    // handleProfileDataReturned,
    // handleGetAllAccounts,
    // handleGetConnectedAccount,
    // handleMessageSignature,
    // handleVerifyMessageSignature,
    // handleGetBalance,
    // handleSendTransaction,
    // handleGetBlockNumber,
    // handleGetTransactionCount,
    // handleReadFromContract,
    // handleWriteToContract,
    // handleErrorMessage,
    profileData,
    childRef,
  } = useContext(Context);

  const [isConnected, setIsConnected] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [tagsArray, setTagsArray] = useState([]);

  const hiddenButtonWrapperRef = React.useRef(null);
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // web3 functions
  const handleProfileDataReturned = (data ) => {
    const receivedData = JSON.parse(JSON.stringify(data))
    console.log("Get profile data:", receivedData);
    alert(JSON.stringify(data));
    childRef.current.closeSocialConnectPopup();
  };

  // Web3 function handles
  const handleGetAllAccounts = (data ) => {
      const receivedData = JSON.parse(JSON.stringify(data))
      console.log("Get all accounts:", receivedData);
      alert(JSON.stringify(data));
  };
  const handleGetConnectedAccount = (data ) => {
      const receivedData = JSON.parse(JSON.stringify(data))
      console.log("Get connected account:", receivedData);
      alert(JSON.stringify(data));
  };
  const handleMessageSignature = (data ) => {
      const receivedData = JSON.parse(JSON.stringify(data))
      console.log("Get message signature:", receivedData);
      alert(JSON.stringify(data));
  };
  const handleVerifyMessageSignature = (data ) => {
      const receivedData = JSON.parse(JSON.stringify(data))
      console.log("Verify message signature:", receivedData);
      alert(JSON.stringify(data));
  };
  const handleGetBalance = (data ) => {
      const receivedData = JSON.parse(JSON.stringify(data))
      console.log("Get balance:", receivedData);
      alert(JSON.stringify(data));
  };
  const handleSendTransaction = (data ) => {
      const receivedData = JSON.parse(JSON.stringify(data))
      console.log("Send transaction:", receivedData);
      alert(JSON.stringify(data));
  };
  const handleGetBlockNumber = (data ) => {
      const receivedData = JSON.parse(JSON.stringify(data))
      console.log("Get block number:", receivedData);
      alert(JSON.stringify(data));
  };
  const handleGetTransactionCount = (data ) => {
      const receivedData = JSON.parse(JSON.stringify(data))
      console.log("Get transaction count:", receivedData);
      alert(JSON.stringify(data));
  };
  const handleReadFromContract = (data ) => {
      const receivedData = JSON.parse(JSON.stringify(data))
      console.log("Read from contract:", receivedData);
      alert(JSON.stringify(data));
  };
  const handleWriteToContract = (data ) => {
      const receivedData = JSON.parse(JSON.stringify(data))
      console.log("Write to contract:", receivedData);
      alert(JSON.stringify(data));
  };
  const handleErrorMessage = (data ) => {
      const receivedData = JSON.parse(JSON.stringify(data))
      console.log("Get error message:", receivedData);
      alert(JSON.stringify(data));
  };

  const handleVisibleButtonClick = () => {
    if (hiddenButtonWrapperRef.current) {
      const hiddenButton = hiddenButtonWrapperRef.current.querySelector("button");
      if (hiddenButton) {
        hiddenButton.click();
      }
    }
  };

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

  useEffect(() => {
    const tagsList = tags.split(",").map(tag => tag.trim()).filter(tag => tag);
     console.log(tagsList)
    setTagsArray(tagsList);
  }, [tags]);

  return (
    <div className="bg-black pb-12">
      {/* Navbar */}
      <div className="flex justify-between items-center bg-black p-[18px]">
        <div className="w-[128px] h-[103px] object-cover">
          <img src="https://i.imgur.com/VSXWSCv.png" alt="Logo" />
        </div>

        {/* Wallet */}
        <div>
          <div className="w-[186px]">
            {/* Hidden button */}
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
            {/* Showing button */}
            <div
              onClick={handleVisibleButtonClick}
              className="rounded-lg cursor-pointer w-full flex items-center justify-evenly relative box-border h-[3.25rem] overflow-hidden text-left text-[1.125rem] text-white font-inter border-[0.5px] border-solid border-[#FFFFFF4D]"
            >
              <img
                className={`flex items-center justify-center object-cover ${isConnected ? 'rounded-full w-[2rem]' : 'w-[1.188rem] h-[1.875rem]'}`}
                alt="Profile"
                src={isConnected ? profileData.profileUrl : 'https://i.imgur.com/85UVZQv.png'}
              />
              <div className="flex items-center justify-center uppercase font-light">
                {isConnected ? profileData.name : 'Connect'}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar */}

      {/* Main */}
      <div className="w-[80%] pt-7 pl-[77px] pb-10 pr-[49px] mx-auto flex flex-col items-start justify-start relative rounded-[20px] bg-[#111] box-border overflow-hidden text-left text-[1.375rem] text-[#7a7a7a] font-inria-serif border-[1px] border-solid border-[#282828]">
        {/* AI */}
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-[35.063rem] placeholder:bg-transparent bg-transparent relative text-[2.188rem] capitalize inline-block font-inria-serif text-white placeholder:text-[#7A7A7A] p-1 text-left"
          />
        </div>

        <div className="flex gap-20 w-full">
          <img
            src="https://i.imgur.com/Pp7qZ4p.png"
            alt="Upload"
            className="cursor-pointer w-[300px] object-contain"
            onClick={handleImageClick}
          />
          <img
            src={selectedImage || ""}
            alt="Selected"
            className={`cursor-pointer w-[300px] object-cover ${selectedImage ? "" : "hidden"}`}
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

        <div className="py-9">
          <input
            type="text"
            placeholder="Start Writing"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-[35.063rem] h-[160px] placeholder:bg-transparent bg-transparent relative text-[1.5rem] capitalize inline-block font-inria-serif text-white placeholder:text-[#7A7A7A] p-1 text-left"
          />
        </div>

        <div className="py-9">
          <input
            type="text"
            placeholder="Tags (*separate by comma)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-[25.063rem] px-5 h-[100px] placeholder:bg-transparent bg-transparent relative text-[1.5rem] capitalize inline-block font-inria-serif rounded-[5px] bg-[#2B2B2B] text-white placeholder:text-[#b0b0b0] p-1 text-left"
          />
        </div>

        <div className="flex cursor-pointer items-center justify-end w-full">
          <div className="w-[166px] relative rounded-[5px] bg-white box-border h-[2.813rem] overflow-hidden text-left text-[1.375rem] text-black font-inria-serif border-[1px] border-solid border-white">
            <div className="flex items-center h-full justify-center capitalize">
              Publish
            </div>
          </div>
        </div>
      </div>
      {/* Main */}
      <div>{tagsArray}</div>
    </div>
  );
};

export default AddBlog;
