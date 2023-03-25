let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let [A, B] = input.map(n=>parseInt(n));
let answer = Math.abs(A-B);
console.log(answer)