let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
let [A, B, C] = input.map(n=>parseInt(n));
console.log(A+B+C)