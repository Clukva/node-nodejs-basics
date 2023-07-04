import { fork } from "child_process";
import { URL } from "node:url";

const spawnChildProcess = async (args) => {
  const filePath = new URL("./files/script.js", import.meta.url);

  const childProcess = fork(filePath, args, {
    stdio: ["pipe", "pipe", "pipe", "ipc"],
  });

  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);
};

spawnChildProcess(["true", "2", "three"]);

