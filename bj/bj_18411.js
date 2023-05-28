let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let arr = input.map(n=>parseInt(n));
arr.sort((a,b)=>b-a);
console.log(arr[0]+arr[1]);