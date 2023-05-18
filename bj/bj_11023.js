let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let arr = input.map(n=>parseInt(n));
let sum = arr.reduce((acc, crnt)=> acc+crnt, 0);
console.log(sum)