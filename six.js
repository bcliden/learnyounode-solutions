
const filteredLs = require('./six.module');

const folder = process.argv[2];
const ext = process.argv[3];

filteredLs(folder, ext, (err, list) => {
    if(err) return console.log(err);

    // console.log("outside fn: ", list);

    for (item of list){
        console.log(item);
    }
})