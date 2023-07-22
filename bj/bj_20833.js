let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let N = parseInt(input);
let sum = 0;
for(let i=1; i<=N; i++){
    sum += Math.pow(i,3)
}
console.log(sum)