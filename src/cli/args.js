const parseArgs = () => {
  const argsArray = [];

  for (let i = 0; i < process.argv.length; i++) {
    if (process.argv[i].startsWith("--")) {
      argsArray.push(process.argv[i].slice(2) + " is " + process.argv[i + 1]);
    }
  }

  console.log(argsArray.join(", "));
};

parseArgs();

