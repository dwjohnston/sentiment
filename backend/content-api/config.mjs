export default function(conf) {
  let config = {};

  for (let str of conf) {
    let str2 = str;
    if (process.env.NODE_ENV === "dev") {
      str2 = "SENTIMENT_" + str;
    }

    config[str] = process.env[str2];
  }

  return config;
}
