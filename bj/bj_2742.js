// let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let input = [5];

const N = Number(input);
let result = '';

for (let i = N; i >= 1; i--) {
    result += i + "\n";
}

console.log(result)