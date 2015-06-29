var mymodule = require('./mymodule');

mymodule(process.argv[2], process.argv[3], function(err, data) {
    if (err) {
        console.log(err);
        return;
    } else {
        data.forEach(function(file){
           console.log(file);
        });
    }
});
