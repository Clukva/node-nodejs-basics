import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { stdout } from "process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  try {
    let dataContent = "";
    const myReadStream = fs.createReadStream(
      __dirname + "/files/fileToRead.txt",
      "utf-8"
    );
    myReadStream.on("data", (chunk) => {
      dataContent += chunk;
    });
    myReadStream.on("end", () => {
      stdout.write(dataContent);
    });
  } catch (err) {
    throw new Error(err);
  }
};

await read();

