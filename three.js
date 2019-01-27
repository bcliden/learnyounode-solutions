const fs = require('fs');

const buf = fs.readFileSync(process.argv[2], 'utf8');
// -> returns a buffer object
// const strBuf = buf.toString()
const count = buf.split('\n').length - 1;

console.log(count);