let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0]);
let [A, B] = input[1].split(' ').map(n=>parseInt(n));
let sum = Math.floor(A/2) + B;
if(sum<=N){
    console.log(sum)
}else{
    console.log(N)
}