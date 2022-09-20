// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = [`5 2`,`4 1 2 3 5`]
let [N, K] = input[0].split(' ').map(n => parseInt(n));
let arr = input[1].split(' ').map(n=>parseInt(n));
arr.sort((a,b) => a-b);
console.log(arr[K-1])