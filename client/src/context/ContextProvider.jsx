import React, { useEffect, useState } from "react";
import { ethers, utils } from "ethers";
import { contractABI, contractAddress } from "../utils/GMBUILDERS";

export const Context = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const socoinContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );
  console.log("ethereum", ethereum);
  console.log(contractABI, contractAddress);
  console.log("signer", signer);
  console.log("provider", provider);
  console.log("Contract", socoinContract);
  return socoinContract;
};
// eslint-disable-next-line react/prop-types
export const BlogProvider = ({ children }) => {
  const childRef = React.useRef(null);
  const [datas, setDatas] = React.useState("");
  const [profileData, setProfileData] = useState(null);

  const handleProfileDataReturned = (data) => {
    try {
      const receivedData = data.data; // Access the data array correctly
      console.log("dapp receives:", receivedData);

      if (receivedData && receivedData.length > 0) {
        // Ensure there is at least one element in the array
        const firstProfileData = receivedData[0]["profileData"];

        if (firstProfileData) {
          const _profileData = JSON.parse(firstProfileData); // Parse the profileData string
          setDatas(receivedData[0]); // Update the state with the first item in the data array
          setProfileData(_profileData); // Update the state with the parsed profileData
        } else {
          console.error("Profile data is undefined");
        }
      } else {
        console.error("Received data is empty or undefined");
      }
    } catch (error) {
      console.error("Error processing profile data:", error);
    }

    if (childRef.current) {
      childRef.current.closeSocialConnectPopup(); // Ensure the childRef is defined before accessing
    }
  };
  // Web3 function handles
  const handleGetAllAccounts = (data) => {
    const receivedData = JSON.parse(JSON.stringify(data));
    console.log("Get all accounts:", receivedData);
    alert(JSON.stringify(data));
  };
  const handleGetConnectedAccount = (data) => {
    const receivedData = JSON.parse(JSON.stringify(data));
    console.log("Get connected account:", receivedData);
    alert(JSON.stringify(data));
  };
  const handleMessageSignature = (data) => {
    const receivedData = JSON.parse(JSON.stringify(data));
    console.log("Get message signature:", receivedData);
    alert(JSON.stringify(data));
  };
  const handleVerifyMessageSignature = (data) => {
    const receivedData = JSON.parse(JSON.stringify(data));
    console.log("Verify message signature:", receivedData);
    alert(JSON.stringify(data));
  };
  const handleGetBalance = (data) => {
    const receivedData = JSON.parse(JSON.stringify(data));
    console.log("Get balance:", receivedData);
    alert(JSON.stringify(data));
  };
  const handleSendTransaction = (data) => {
    const receivedData = JSON.parse(JSON.stringify(data));
    console.log("Send transaction:", receivedData);
    alert(JSON.stringify(data));
  };
  const handleGetBlockNumber = (data) => {
    const receivedData = JSON.parse(JSON.stringify(data));
    console.log("Get block number:", receivedData);
    alert(JSON.stringify(data));
  };
  const handleGetTransactionCount = (data) => {
    const receivedData = JSON.parse(JSON.stringify(data));
    console.log("Get transaction count:", receivedData);
    alert(JSON.stringify(data));
  };
  const handleReadFromContract = (data) => {
    const receivedData = JSON.parse(JSON.stringify(data));
    console.log("Read from contract:", receivedData);
    alert(JSON.stringify(data));
  };
  const handleWriteToContract = (data) => {
    const receivedData = JSON.parse(JSON.stringify(data));
    console.log("Write to contract:", receivedData);
    alert(JSON.stringify(data));
  };
  const handleErrorMessage = (data) => {
    const receivedData = JSON.parse(JSON.stringify(data));
    console.log("Get error message:", receivedData);
    alert(JSON.stringify(data));
  };

  const renderData = (data) => {
    if (typeof data === "object" && data !== null) {
      return <pre>{JSON.stringify(data, null, 2)}</pre>;
    } else {
      return <div>{data}</div>;
    }
  };
  return (
    <Context.Provider
      value={{
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
        renderData,
        getEthereumContract,
        childRef,
        datas,
        profileData,
      }}
    >
      {children}
    </Context.Provider>
  );
};
