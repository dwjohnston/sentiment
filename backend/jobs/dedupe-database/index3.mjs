import data from "./output/test7.json"; 
import fs from "fs"; 
import moment from "moment"; 
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
const res2 = {};

for (let v of data) {
    let time = moment(v.timeNow).startOf('day').toISOString();
    if (!res[time]){
        res[time] = []
    } 
    res[time].push(v);  

    res2[time] = res[time].length; 
}





writeFile(res, 'buckets1.json');
writeFile(res2, 'bucketlenths.json');

