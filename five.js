const fs = require('fs');
const path = require('path');

const folder = process.argv[2];
const ext = '.' + process.argv[3];

fs.readdir(folder, (err, list) => {
    if (err) return console.log(err);

    for (item of list){
        if (path.extname(item) === ext){
        // if(item.split('.')[1] === ext ){
            console.log(item);
        };
    };
})