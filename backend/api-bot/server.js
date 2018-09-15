
const POLLING_INTERVAL = 1000 * 60 * 15 + 1000; //15 minutes + 1 second

function fetchData() {
    console.log("fetching data");

}

console.info("start running");
setInterval(fetchData, POLLING_INTERVAL);
console.info("application is running"); 