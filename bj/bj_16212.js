// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [6,
  `14 5 8 7 1 10`];
let N = parseInt(input[0]);
let arr = input[1].split(' ').map(n=>parseInt(n));
arr.sort((a,b)=>a-b);
console.log(arr.join(' '))