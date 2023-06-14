import fs from "fs";
const { promises: fsProm } = fs;

const rename = async () => {
  const renameFrom = "src/fs/files/wrongFilename.txt";
  const renameTo = "src/fs/files/properFilename.md";

  if (fs.existsSync(renameTo) || !fs.existsSync(renameFrom)) {
    throw new Error("FS operation failed");
  }

  try {
    await fsProm.rename(renameFrom, renameTo);
    console.log("File renamed");
  } catch (err) {
    console.log(err);
  }
};

await rename();

