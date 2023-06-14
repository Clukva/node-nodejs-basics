import fs from "fs";

const deletePath = "src/fs/files/fileToRemove.txt";

const remove = async () => {
  if (!fs.existsSync(deletePath)) {
    throw new Error("FS operation failed");
  }
  return new Promise((res, rej) => {
    fs.unlink(deletePath, (err) => {
      if (err) {
        rej(err);
      } else {
        console.log("File removed");
        res();
      }
    });
  });
};

await remove();

