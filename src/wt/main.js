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

  const arrayPromise = [];

  for (let i = 0; i < numCores; i++) {
    const promise = calculateData(10 + i);
    arrayPromise.push(promise);
  }

  const finalArray = await Promise.all(arrayPromise);
  console.log(finalArray);
};

await performCalculations();

