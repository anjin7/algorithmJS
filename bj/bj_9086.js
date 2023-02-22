let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0]);
let answer = [];
for(let i=1; i<=N; i++){
    let word = input[i].split('');
    let first = word[0];
    let last = word[word.length-1];
    answer.push(first+last)
}
console.log(answer.join('\n'))