// let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let input = [5, 2];

const A = Number(input[0]);
const B = Number(input[1]);
let num1 = 1;
let num2 = 1;
let num3 = 1;

for (let i=1; i <= A; i++) {
    num1 *= i;
};
for (let j=1; j <= B; j++) {
    num2 *= j;
};
for (let k=1; k <= (A-B); k++) {
    num3 *= k;
};
console.log((num1/(num2*num3)));