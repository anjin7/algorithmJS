let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0]);
let answer = [];
for(let i=1; i<=N; i++){
    let name = input[i].toLowerCase();
    answer.push(name);
}
console.log(answer.join('\n'))