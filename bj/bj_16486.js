let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [D, R] = input.map(n=>parseInt(n));
console.log((2*D)+(2*3.141592*R))