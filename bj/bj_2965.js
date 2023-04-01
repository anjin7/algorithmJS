let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let arr = input.map(n=>parseInt(n));
let gap = [];
for(let i=1; i<arr.length; i++){
    gap.push(arr[i]-arr[i-1]);
}
let move = Math.max(...gap) -1;
console.log(move)