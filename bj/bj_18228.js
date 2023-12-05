let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0]);
let arr = input[1].split(' ').map(n=>parseInt(n));
let idx = arr.indexOf(-1);
let first = arr.slice(0, idx);
let second = arr.slice(idx+1);
let min1 = Math.min(...first);
let min2 = Math.min(...second);
console.log(min1+min2)