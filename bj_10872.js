// let input = require('fs').readFileSync('/dev/stdin').toString();

let input = [10];

let result = 1;

for (let i=1; i <= Number(input); i++) {
    result *= i;
}
console.log(result);