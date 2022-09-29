// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = [7, `SUNGPIL`];
let N = parseInt(input[0]);
let name = input[1].split('');
let sum = 0;
for(let i=0; i<N; i++){
    let score = name[i].charCodeAt(0) - 64;
    sum += score;
}
console.log(sum);