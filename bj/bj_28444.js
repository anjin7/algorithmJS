let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let [H, I, A, R, C] = input.map(n=>parseInt(n));
console.log((H*I)-(A*R*C))