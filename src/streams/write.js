import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { stdin } from "process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = __dirname + "/files/fileToWrite.txt";

const write = async () => {
  try {
    const myWriteStream = fs.createWriteStream(filePath, { flags: "a" });
    stdin.pipe(myWriteStream);
  } catch (err) {
    throw new Error(err);
  }
};

await write();

