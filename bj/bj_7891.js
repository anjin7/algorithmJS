let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0]);
for(let i=1; i<=N; i++){
    let [A, B] = input[i].split(' ').map(n=>parseInt(n));
    console.log(A+B)
}