let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let [N, B] = input.map(n=>parseInt(n));
let answer = N.toString(B).toUpperCase();
console.log(answer)