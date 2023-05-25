let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let [A, B, C] = input.map(n=>parseInt(n));
console.log((B/A)*C*3)