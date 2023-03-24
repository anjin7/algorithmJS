let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(n=>parseInt(n));
input.sort((a,b)=>a-b);
console.log(input.join(' '))