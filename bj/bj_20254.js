let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let [a,b,c,d] = input.map(n=>parseInt(n));
console.log(56*a+24*b+14*c+6*d)