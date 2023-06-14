import fs from "fs";

const renameFrom = "src/fs/files/wrongFilename.txt";
const renameTo = "src/fs/files/properFilename.md";

const rename = async () => {
  if (fs.existsSync(renameTo) || !fs.existsSync(renameFrom)) {
    throw new Error("FS operation failed");
  }
  return new Promise((res, rej) => {
    fs.rename(renameFrom, renameTo, (err) => {
      if (err) {
        rej(err);
      } else {
        console.log("File renamed");
        res();
      }
    });
  });
};

await rename();

