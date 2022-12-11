const fs = require('fs');
//console.log(fs);
const readedFile = fs.readFileSync('./text.txt')
console.log(readedFile.toString());