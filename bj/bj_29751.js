let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let [W, H] = input.map(n=>parseInt(n));
let answer = ((W*H)/2).toFixed(1);
console.log(answer)