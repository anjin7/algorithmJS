let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0]);
let arr = input[1].split(' ').map(n=>parseInt(n));
let cnt = 0;
for(let i=0; i<N; i++){
    if(arr[i]!==(i+1)) cnt++
}
console.log(cnt)