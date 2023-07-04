import fs from "fs";
const { promises: fsProm } = fs;

const filePath = "src/fs/files/fresh.txt";
const fileContent = "I am fresh and young";

const create = async () => {
  if (fs.existsSync(filePath)) {
    throw new Error("FS operation failed");
  }

  try {
    await fsProm.writeFile(filePath, fileContent);
    console.log("File created");
  } catch (err) {
    console.log(err);
  }
};

await create();

