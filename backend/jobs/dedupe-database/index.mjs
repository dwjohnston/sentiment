import MongoClient from "mongodb";
import getConfig from "./config";

import fs from "fs";

const config = getConfig();

function getDbString() {
  return `mongodb://${config.db.username}:${config.db.password}@${
    config.db.url
  }/${config.db.name}`;
}
const dbString = getDbString();

async function openMongoConnection() {
  console.log(dbString);
  return await MongoClient.connect(dbString);
}

async function closeMongoConnection(client) {
  console.log("closing connection");
  return client.close();
}

async function doTheThings() {
  const mongoConnection = await openMongoConnection();
  const db = mongoConnection.db(config.db.name);

  let results = await db
    .collection(config.db.collectionName)
    .find({})
    .project({ timeNow: true, author:true, })
    .toArray();

  fs.writeFile("./output/test7.json", JSON.stringify(results), function(err) {
    if (err) {
      return console.log(err);
    }

    console.log("The file was saved!");
  });
}

doTheThings();
