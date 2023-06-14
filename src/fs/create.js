import fs from "fs";

const create = async () => {
  const filePath = "src/fs/files/fresh.txt";
  const fileContent = "I am fresh and young";

  if (fs.existsSync(filePath)) {
    throw new Error("FS operation failed");
  }
  return new Promise((res, rej) => {
    fs.writeFile(filePath, fileContent, (err) => {
      if (err) {
        rej(err);
      } else {
        console.log("File created");
        res();
      }
    });
  });
};

await create();

