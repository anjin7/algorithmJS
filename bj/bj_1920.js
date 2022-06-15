// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [5, `4 1 5 2 3`, 5, `1 3 7 9 5`]

let N = Number(input[0]);
let setA = new Set(input[1].split(' ').map(Number));
let M = Number(input[2]);
let arrB = input[3].split(' ').map(Number);
let answer = [];

for(let i=0; i<M; i++){
    if(setA.has(arrB[i])) answer.push(1)
    else answer.push(0)
}
console.log(answer.join('\n'))