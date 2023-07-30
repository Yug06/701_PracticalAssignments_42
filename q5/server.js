var fs = require("fs");
var zlib = require('zlib'); // Compress the file input.txt to input.txt.gz 
fs.createReadStream('name.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('name.txt.gz')); 
    console.log("File Compressed.");