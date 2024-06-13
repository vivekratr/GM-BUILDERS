import { createRegistry, createRequest } from "@substreams/core";
import { readPackage } from "@substreams/manifest";
import { BlockEmitter } from "@substreams/node";
import { createNodeTransport } from "@substreams/node/createNodeTransport";

const SUBSTREAMS_API_KEY = "c725202fc015b8ca2b967bd0d05e34b16d79b499948abba2";
const SUBSTREAMS_URL = "https://arbsepolia.substreams.pinax.network:443";
const MANIFEST =
  "https://github.com/pinax-network/substreams/releases/download/blocks-v0.1.0/blocks-v0.1.0.spkg";
const SUBSTREAMS_MODULE = "map_blocks";
const START_BLOCK = "6094105"; //GMbuilder smart contract's start block
const STOP_BLOCK = "+10000";

/*
    Entrypoint of the application.
    Because of the long-running connection, Substreams will disconnect from time to time.
    The application MUST handle disconnections and commit the provided cursor to avoid missing information.
*/
const main = async () => {
  const headers = new Headers({ "User-Agent": "@substreams/node" });
   const substreamPackage = await readPackage(MANIFEST);
const registry = createRegistry(substreamPackage);
const transport = createNodeTransport(SUBSTREAMS_URL, SUBSTREAMS_API_KEY, registry, headers);
const request = createRequest({substreamPackage, outputModule: SUBSTREAMS_MODULE, startBlockNum: -1});

// NodeJS Events
const emitter = new BlockEmitter(transport, request, registry);

// Session Trace ID
emitter.on("session", (session) => {
  console.dir(session);
});

// Stream Blocks
emitter.on("anyMessage", (message, cursor, clock) => {
  console.dir(message);
  console.dir(cursor);
  console.dir(clock);
});

// Start Emitter
await emitter.start();
  
};

main();
