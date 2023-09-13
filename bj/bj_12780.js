let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [H, N] = input;
let answer = H.split(N);
console.log(answer.length-1)