// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let input = [5, 5, 2, 3, 4, 1];

const [N, ...arr] = input;
const result = arr.sort((a, b) => a - b);

console.log(result.join('\n'))