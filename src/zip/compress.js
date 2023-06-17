import zlib from "zlib";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filesDir = __dirname + "/files";

const compress = async () => {
  const gzip = zlib.createGzip();
  const inputStream = fs.createReadStream(filesDir + "/fileToCompress.txt");
  const outputStream = fs.createWriteStream(filesDir + "/archive.gz");

  inputStream.pipe(gzip).pipe(outputStream);
};

await compress();

