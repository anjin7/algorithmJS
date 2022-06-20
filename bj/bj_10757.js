// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let input = [`9223372036854775807`, `9223372036854775808`]
let A = BigInt(input[0]);
let B = BigInt(input[1]);
let answer = A+B;
console.log(answer.toString())