let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let [a, b, c, d] = input.map(n=>parseInt(n));
console.log((a*b)+(c*d));