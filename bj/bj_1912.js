// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [10,
`10 -4 3 1 5 6 -35 12 21 -1`]
let N = parseInt(input[0]);
let arr = input[1].split(' ').map(n=> parseInt(n));
let sum = 0;
let max = arr[0];
for(let i=1; i<N; i++){
    arr[i] = Math.max(arr[i], arr[i]+arr[i-1]);
    max = Math.max(arr[i], max)
}
console.log(max)