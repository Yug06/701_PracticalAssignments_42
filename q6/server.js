var fs = require("fs");
var zlib = require('zlib');
fs.createReadStream('name.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('name.txt', 'utf-8'));
console.log("File Decompressed.");