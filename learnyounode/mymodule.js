module.exports = function (dir, ext, callback) {
    var fs = require('fs');

    fs.readdir(dir, function(err, list) {
        if (err) {
            return callback(err);
        } else {
            var result = [];
            for (var i = 0; i < list.length; i++) {
                if (list[i].indexOf('.'+ext) != -1) {
                    result.push(list[i]);
                }
            }
            return callback(null, result);
        }
    });
};
