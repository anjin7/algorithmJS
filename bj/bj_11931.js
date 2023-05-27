let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
let arr = input.map(n=>parseInt(n)).sort((a,b)=>b-a);
console.log(arr.join('\n'))