let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let N = parseInt(input);
console.log(Math.pow(2,N))