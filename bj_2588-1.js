// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const input =[472, 385];

const [A, numarr] = input;
const [num1, num2, num3] = numarr.split('');

console.log(A*num3);
console.log(A*num2);
console.log(A*num1);
console.log(A*numarr);