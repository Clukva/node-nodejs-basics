import fs from "fs";
import crypto from "crypto";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const { promises: fsProm } = fs;

const calculateHash = async () => {
 
  try {
    const filePath = path.join(
      __dirname,
      "files",
      "fileToCalculateHashFor.txt"
    );
    const data = await fsProm.readFile(filePath, { encoding: "utf-8" });
    const hash = crypto.createHash("sha256");
    hash.update(data);
    const hashHex = hash.digest("hex");
    console.log(hashHex);
  } catch (err) {
    console.log(err);
  }
};
await calculateHash();

