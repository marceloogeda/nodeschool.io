var fs = require("fs");

fs.readFile(process.argv[2], "utf8", callback);

function callback(err, data) {
    if (err) {
        console.log(err);
        throw err;
    } else {
        var lines = [];

        lines = data.split('\n');
        console.log(lines.length-1);
    }
};
