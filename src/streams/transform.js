import { stdin, stdout } from "process";
import { Transform } from "stream";
import { pipeline } from "stream/promises";

const transform = async () => {
  try {
    const reverseTransformStream = new Transform({
      transform(chunk, encoding, callback) {
        callback(
          null,
          `${chunk.toString().split("").reverse().join("")}` + "\n"
        );
      },
    });
    await pipeline(stdin, reverseTransformStream, stdout);
  } catch (err) {
    throw new Error(err);
  }
};

await transform();

