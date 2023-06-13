let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let [A, B]= input.map(n=>parseInt(n));
console.log(Math.pow(A,2)-Math.pow(B,2))