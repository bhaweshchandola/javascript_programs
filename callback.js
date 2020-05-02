var fs = require('fs');
// blocking code
// var data = fs.readFileSync('temp.txt');
// console.log(data.toString());

// non blocking code
fs.readFile('temp.txt', function(err, data){
    if (err) return console.log(err);
    console.log(data.toString());
})
console.log("program ended");