let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [sum, ...arr] = input.map(n=>parseInt(n));
let restSum = arr.reduce((acc,current)=>acc+current,0);
console.log(sum-restSum)