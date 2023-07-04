import fs from "fs";
const { promises: fsProm } = fs;

const read = async () => {
  const path = "src/fs/files/fileToRead.txt";

  try {
    const content = await fsProm.readFile(path, "utf-8");
    console.log(content);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await read();

