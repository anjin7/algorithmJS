let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = input.map(n=>parseInt(n)).sort((a,b)=>a-b);
let half = Math.floor(arr.length/2);
console.log(arr[half])