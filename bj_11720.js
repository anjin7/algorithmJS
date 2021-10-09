// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = [5, 54321]

let num = Number(input[0]);
let arr = input[1].split('');
let sum = 0;

for(let i=0; i<num; i++){
    sum += Number(arr[i]);
};
console.log(sum)
