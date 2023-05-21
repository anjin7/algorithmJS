let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let [R,C,N] = input.map(n=>parseInt(n));
let sum = Math.ceil(R/N) * Math.ceil(C/N);
console.log(sum)