import { createRegistry, createRequest } from “@substreams/core”;
import { readPackage } from “@substreams/manifest”;
import { BlockEmitter, createDefaultTransport } from “@substreams/node”;

const { MANIFEST, SUBSTREAMS_URL, SUBSTREAMS_API_KEY } = process.env;

// Read Substream
const substreamPackage = await readPackage({MANIFEST});

// Connect Transport
const headers = new Headers({ “User-Agent”: “@substreams/node” });
const registry = createRegistry(substreamPackage);
const transport = createDefaultTransport({SUBSTREAMS_URL}, {SUBSTREAMS_API_KEY}, registry, headers);
const request = createRequest({substreamPackage, outputModule: “graph_out”, startBlockNum: -1});

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
console.log("✅ Done")