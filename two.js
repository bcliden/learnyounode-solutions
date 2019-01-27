let args = process.argv.splice(2);

let sum = args.reduce((acc, next) => acc + Number(next), 0);

console.log(sum);