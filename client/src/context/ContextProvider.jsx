import React, { useEffect, useState } from "react";
import { ethers,utils } from 'ethers';
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
export const BlogProvider = ({ children }) => {
return (
    <Context.Provider
      value={{ }}
      >
        {children}
      </Context.Provider>
    );
  };