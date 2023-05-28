let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0]);
let arr = input[1].split(' ').map(n=>parseInt(n)).sort((a,b)=>a-b);
console.log(arr[N-1])