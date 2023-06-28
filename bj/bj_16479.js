let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let K = parseInt(input[0]);
let [d, e] = input[1].split(' ').map(n=>parseInt(n));
let answer = K*K - ((d-e)*(d-e)/4);
console.log(answer)