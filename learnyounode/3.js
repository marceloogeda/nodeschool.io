var fs = require('fs'),
    buffer = fs.readFileSync(process.argv[2]),
    newlines = buffer.toString().split('\n');

console.log(newlines.length-1);
