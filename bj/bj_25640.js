let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [Jinho, N, ...arr] = input;
let cnt = 0;
for(let i=0; i<parseInt(N); i++){
    if(arr[i]===Jinho) cnt++
}
console.log(cnt)