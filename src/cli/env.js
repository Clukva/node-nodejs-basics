const parseEnv = () => {
  const variables = [];

  for (const key in process.env) {
    if (key.startsWith("RSS_")) {
      variables.push(key + "=" + process.env[key]);
    }
  }
  console.log(variables.join("; "));
};

parseEnv();

