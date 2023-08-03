let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, ...arr] = input.map(n=>parseInt(n));
let sum = arr.reduce((acc,curnt)=>acc+curnt,0);
console.log(sum)