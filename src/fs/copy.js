import fs from "fs";
import path from "path";

const copy = async () => {
  const copyFrom = "src/fs/files";
  const copyTo = "src/fs/files_copy";

  if (fs.existsSync(copyTo) || !fs.existsSync(copyFrom)) {
    throw new Error("FS operation failed");
  } else {
    fs.mkdirSync(copyTo);
  }

  function copyFolder(sourceFrom, sourceTo) {
    if (!fs.existsSync(sourceTo)) {
      fs.mkdirSync(sourceTo);
    }

    const files = fs.readdirSync(sourceFrom);

    files.forEach((file) => {
      const sourcePath = path.join(sourceFrom, file);
      const destinationPath = path.join(sourceTo, file);

      const isFolder = fs.statSync(sourcePath).isDirectory();

      if (isFolder) {
        copyFolder(sourcePath, destinationPath);
      } else {
        fs.copyFileSync(sourcePath, destinationPath);
      }
    });
  }

  return new Promise((resolve) => {
    copyFolder(copyFrom, copyTo);
    console.log("Folder copied successfully");
    resolve();
  });
};

await copy();

