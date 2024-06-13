import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createRequest,
  streamBlocks,
  createAuthInterceptor,
  createRegistry,
  fetchSubstream,
} from "@substreams/core";
import { createConnectTransport } from "@connectrpc/connect-web";
import { getCursor } from "./cursor.js";
import { handleResponseMessage, handleProgressMessage } from "./handlers.js";
import { isErrorRetryable } from "./error.js";

const TOKEN = "c725202fc015b8ca2b967bd0d05e34b16d79b499948abba2"; // Substreams token. Put here your Substreams API token.
const ENDPOINT = "https://arbsepolia.substreams.pinax.network:443"; // Substreams endpont. In this case, Ethereum mainnet
const SPKG =
  "https://github.com/pinax-network/substreams/releases/download/blocks-v0.1.0/blocks-v0.1.0.spkg"; // Substreams package. In this case, taken from the substreams.dev registry
const MODULE = "map_blocks";
const START_BLOCK = "6094105";
const STOP_BLOCK = "+9000";

const main = async () => {
  const pkg = await fetchPackage(); // Download spkg
  const registry = createRegistry(pkg);

  const transport = createConnectTransport({
    baseUrl: ENDPOINT,
    interceptors: [createAuthInterceptor(TOKEN)],
    useBinaryFormat: true,
    jsonOptions: {
      typeRegistry: registry,
    },
  });

  // The infite loop handles disconnections. Every time an disconnection error is thrown, the loop will automatically reconnect
  // and start consuming from the latest commited cursor.
  while (true) {
    try {
      await stream(pkg, registry, transport);
    } catch (e) {
      if (!isErrorRetryable(e)) {
        console.log(`A fatal error occurred: ${e}`);
        throw e;
      }
      console.log(`A retryable error occurred (${e}), retrying after backoff`);
      console.log(e);
    }
  }
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
