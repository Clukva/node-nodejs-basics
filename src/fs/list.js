import fs from "fs";

const list = async () => {
  const sourceFrom = "src/fs/files";

  if (!fs.existsSync(sourceFrom)) {
    throw new Error("FS operation failed");
  }

  const files = fs.readdirSync(sourceFrom);
  const arrFiles = [];

  files.forEach((file) => {
    arrFiles.push(file);
  });

  console.log(files);
};
await list();

