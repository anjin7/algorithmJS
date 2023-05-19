let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [A, B] = input.map(n=>parseInt(n));
let gap = B-A;
console.log(B+gap)