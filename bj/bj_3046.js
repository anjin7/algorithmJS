let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let [R1, S] = input.map(n=>parseInt(n));
let R2 = 2*S - R1;
console.log(R2)