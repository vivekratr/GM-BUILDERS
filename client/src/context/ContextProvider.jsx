import React, { useEffect, useState } from "react";
import { ethers,utils } from 'ethers';
import { contractABI, contractAddress } from "../utils/constants";

export const Context = React.createContext();