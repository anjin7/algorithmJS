// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [11, `1 4 1 2 4 2 4 2 3 4 4`, 2];
let N = parseInt(input[0]);
let arr = input[1].split(' ').map(n => parseInt(n));
let V = parseInt(input[2]);
let cnt = 0;

for(let i=0; i<N; i++){
    if(arr[i]===V) cnt++
}
console.log(cnt)