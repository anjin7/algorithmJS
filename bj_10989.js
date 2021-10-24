// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let input=[10, 5, 2, 3, 1, 4, 2, 3, 5, 1, 7];

const [N, ...arr] = input;
const result = arr.sort((a, b) => a - b);
console.log(result.join('\n'))