// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input =[`5 2`,
`100 76 85 93 98`]

let [N, k] = input[0].split(' ').map(n => parseInt(n));
let arr = input[1].split(' ').map(n=>parseInt(n));
arr.sort((a,b)=>b-a);
let cut = arr[k-1];
console.log(cut)
