let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let [S, T, D] = input.map(n=>parseInt(n));
let hour = D/(S*2);
console.log(T*hour)