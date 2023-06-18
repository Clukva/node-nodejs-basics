import { Worker, workerData } from "worker_threads";
import { cpus } from "os";
import { URL } from "node:url";

const performCalculations = async () => {
  const numCores = cpus().length;

  const workerPath = new URL("./worker.js", import.meta.url);

  const calculateData = (workerData) =>
    new Promise((res) => {
      const workerStream = new Worker(workerPath, { workerData });

      workerStream.on("message", (data) => res({ status: "resolved", data }));
      workerStream.on("error", () => res({ status: "error", data: null }));
    });

  const array = [];

  for (let i = 0; i < numCores; i++) {
    const promis = calculateData(10 + i);
    array.push(promis);
  }

  const finalArray = await Promise.all(array);
  console.log(finalArray);
};

await performCalculations();

