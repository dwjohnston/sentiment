import MongoClient from "mongodb";
import getConfig from "./config";
import fetch from 'node-fetch';
import assert from 'assert';
import moment from "moment";

const config = getConfig();


//const POLLING_INTERVAL = 1000 * 60 * 15 + 1000; //15 minutes + 1 second

const sources = [
    "the-washington-post",
    "fox-news",
    "bbc-news",
    "cnn"
]
function createEndpoint() {
    return `${config.newsapi.url}top-headlines?sources=${sources.join(',')}&apiKey=${config.newsapi.apikey}`;
}

function getDbString() {
    return `mongodb://${config.db.username}:${config.db.password}@${config.db.url}/${config.db.name}`;
}
const dbString = getDbString();
const endPoint = createEndpoint();

// // Use connect method to connect to the server
// MongoClient.connect(url, function (err, client) {
//     assert.equal(null, err);
//     console.log("Connected successfully to server");

//     const db = client.db(dbName);

//     client.close();
// });


function handleError(error) {
    //Send me an email
    console.error(error);
}

async function openMongoConnection() {
    console.log(dbString);
    return await MongoClient.connect(dbString);
}

async function closeMongoConnection(client) {
    console.log("closing connection");
    return client.close();
}

async function saveArticles(articles, db) {
    console.log("saving articles");
    return db.collection(config.db.collectionName)
        .insertMany(articles);
}

function convertArticle(json, timeNow) {
    return Object.assign({}, json, { timeNow: timeNow });
}

async function saveData(json) {

    const client = await openMongoConnection();
    const timeNow = Date.now();
    const db = client.db(config.db.name);

    try {
        await saveArticles(
            json.articles.map(
                article => convertArticle(article, timeNow)
            ),
            db
        );
    }
    catch (error) {
        handleError(error);
    }
    finally {
        return closeMongoConnection(client);
    }

}

async function fetchData() {
    console.log("fetching data");
    try {
        const data = await fetch(endPoint);
        const json = await data.json();
        await saveData(json);

    }
    catch (error) {
        handleError(error);
    }
}

console.info("start running");
setInterval(fetchData, config.newsapi.polling_interval);
console.info("application is running"); 