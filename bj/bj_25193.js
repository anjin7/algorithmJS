let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0]);
let cNum = 0;
let num = 0;
let arr = input[1].split('');
for(let i=0; i<N; i++){
    if(arr[i]==="C") cNum++
    if(arr[i]!=="C") num++
};
let answer = Math.ceil(cNum/(num+1));
console.log(answer)