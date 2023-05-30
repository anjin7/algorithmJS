let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let [N, B] = input;
let answer = parseInt(N, Number(B));
console.log(answer)