console.log("DEBUG_CHECK - API_KEY length:", process.env.API_KEY ? process.env.API_KEY.length : "EMPTY");
import { createServerAdapter } from "@whatwg-node/server";
import { createServer } from "node:http";
import worker from "./src/worker.mjs";

const port = +(process.env.PORT || 8080);

const serverAdapter = createServerAdapter(worker.fetch);
const server = createServer(serverAdapter);
server.listen(port, () => {
  console.log("Listening on:", server.address());
});
