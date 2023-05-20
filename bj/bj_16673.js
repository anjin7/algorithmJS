let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let [N, K, P] = input.map(n=>parseInt(n));
let sum = 0;
for(let i=1; i<=N; i++){
    sum += (K*i);
  sum += (P * i * i);
}
console.log(sum);