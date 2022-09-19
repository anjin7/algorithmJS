// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = [5,
1,
3,
4,
6,
2]
let N = parseInt(input[0]);
for(let i=1; i<=N; i++){
    let num = parseInt(input[i]);
    let answer = "";
    for(let j=0; j<num; j++){
        answer += "="
    }
    console.log(answer)
}