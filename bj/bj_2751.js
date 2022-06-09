// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input=[5, 5, 4, 3, 2, 1];

const [N, ...arr] = input;
const result = arr.sort((a, b) => a - b);

console.log(result.join('\n'))