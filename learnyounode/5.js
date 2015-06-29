var fs   = require('fs'),
    path = require('path'),
    dir  = path.dirname(process.argv[1]).concat('/');

function find(directory, extension) {
    fs.readdir(directory, function(err, files) {
        if (err) {
            console.log(err);
            throw err;
        } else {
            files.forEach(function(file) {
                if (path.extname(file).slice(1) === extension) {
                    console.log(file);
                }
            });
        }
    });
}
find(dir, 'md');
