let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, ...arr] = input.map(n=>parseInt(n));
let cnt = arr.reduce((acc,current)=>acc+current,0);
console.log(cnt-N+1)