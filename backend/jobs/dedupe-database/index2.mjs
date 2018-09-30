import data from "./output/test5.json"; 
import fs from "fs"; 
console.log(data); 


function writeFile(data, filename) {
    fs.writeFile(`./output/${filename}`, JSON.stringify(data), function(err) {
        if (err) {
          return console.log(err);
        }
            console.log(`The file ${filename} was saved!`);
      });
}

const res = {};

for (let v of data){
    if (!res[v.timeNow]){
        res[v.timeNow] = 1; 
    }
    else {
        res[v.timeNow] = res[v.timeNow] +1
    }
}

const sortedTimes = Object.keys(res).sort(); 

let diffs = []; 
for (let i = 0; i< sortedTimes.length -1; i++) {
    diffs.push(sortedTimes[i+1] - sortedTimes[i]); 
}

writeFile(diffs, 'diff1.json');

