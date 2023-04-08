let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [A, B] = input.map(n=>parseInt(n));
console.log(A*B)