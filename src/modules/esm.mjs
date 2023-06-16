import { sep, dirname } from "path";
import { fileURLToPath } from "url";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import { createRequire } from "node:module";
import { env } from "node:process";
import "./files/c.js";

const createReq = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const random = Math.random();
let unknownObject;

if (random > 0.5) {
  unknownObject = createReq("./files/a.json");
} else {
  unknownObject = createReq("./files/b.json");
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_req, res) => {
  res.end("Request accepted");
});

env.PORT = 3000;

console.log(unknownObject);

myServer.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export { unknownObject, myServer };

