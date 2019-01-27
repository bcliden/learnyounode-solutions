const fs = require('fs');
const path = require('path');

function filteredLs (dirName, fileExt, callback) {
    fileExt = "." + fileExt;

    fs.readdir(dirName, (err, list) => {
        if (err) return callback(err);

        list = list.filter( val => path.extname(val) === fileExt);

        return callback(null, list);

    });

}

module.exports = filteredLs;