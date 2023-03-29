let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let [A, B, C, D] = input;
let answer = parseInt(A+B) + parseInt(C+D);
console.log(answer)