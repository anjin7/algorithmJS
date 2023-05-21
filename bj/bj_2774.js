let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0]);
for(let i=1; i<=N; i++){
    let arr = input[i].split('');
    let answer = new Set(arr);
    console.log(answer.size)
}