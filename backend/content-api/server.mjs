import MongoClient from "mongodb";
import express from "express";
import getConfig from "../../common/config";
import confArray from "./config.json";
//import mongoose from "mongoose";
const config = getConfig(confArray);
const app = express();

function getDbString() {
  return `mongodb://${config.DB_CONTENT_API_USERNAME}:${
    config.DB_CONTENT_API_PASSWORD
  }@${config.DB_URL}/${config.DB_NAME}`;
}

const dbString = getDbString();

async function openMongoConnection() {
  console.log("open mongo connection");
  return MongoClient.connect(dbString);
}

async function closeMongoConnection(client) {
  console.log("closing connection");
  return client.close();
}

app.get("/test", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ value: Math.random() }));
});

app.get("/all", async (req, res) => {
  console.log("get all");

  try {
    const collection = client
      .db(config.db.name)
      .collection(config.DB_COLLECTION_NAME);
    const articles = await collection
      .find({})
      .limit(10)
      .toArray();
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify({ articles: articles }));
  } catch (error) {
    console.log(error);
    res.status(503).end();
  }
});

let client;
app
  .listen(config.express.port, async () => {
    console.info(`Content API on port ${config.express.port}`);
    client = await openMongoConnection();
  })
  .on("close", () => {
    closeMongoConnection(client);
  });
