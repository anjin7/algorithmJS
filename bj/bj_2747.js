// let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let input = 10;
let N = parseInt(input);
let arr = [0, 1];
for(let i=2; i<=N; i++){
    arr.push(arr[i-2]+arr[i-1]);
}
console.log(arr[N])