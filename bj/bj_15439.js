let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let N = parseInt(input);
console.log(N*(N-1))