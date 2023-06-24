let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0])
let sArr = input[1].split('');
let answer = sArr.slice(N-5);
console.log(answer.join(''))