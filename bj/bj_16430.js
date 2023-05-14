let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let [A, B] = input.map(n=>parseInt(n));
console.log(`${B-A} ${B}`)