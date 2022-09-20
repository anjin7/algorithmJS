// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = [2, 10, 15];

let N = parseInt(input[0]);
let arr = [];
for(let i=1; i<=N; i++){
    arr.push(parseInt(input[i]));
}
arr.sort((a,b)=>a-b);

let answer = [];

for(let i=0; i<N; i++){
    let max = arr[i]*(N-i);
    answer.push(max);
}
answer.sort((a,b)=>b-a);
console.log(answer[0])