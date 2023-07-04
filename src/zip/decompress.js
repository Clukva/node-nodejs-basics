import zlib from "zlib";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filesDir = __dirname + "/files";

const decompress = async () => {
  const gunzip = zlib.createGunzip();
  const inputStream = fs.createReadStream(filesDir + "/archive.gz");
  const outputStream = fs.createWriteStream(filesDir + "/fileToCompress.txt");

  inputStream.pipe(gunzip).pipe(outputStream);
};

await decompress();
