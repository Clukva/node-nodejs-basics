import fs from "fs";
const { promises: fsProm } = fs;

const deletePath = "src/fs/files/fileToRemove.txt";

const remove = async () => {
  if (!fs.existsSync(deletePath)) {
    throw new Error("FS operation failed");
  }

  try {
    await fsProm.unlink(deletePath);
    console.log("File removed");
  } catch (err) {
    console.log(err);
  }
};

await remove();

