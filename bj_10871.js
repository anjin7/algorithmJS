// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = [['10 5'], ['1 10 4 9 2 3 8 5 7 6']];


let num = [];
num = input[0].split(' ');
let N = Number(num[0]);
let X = Number(num[1]);

let arr = [];
arr = input[1].split(' ');

let answer= '';
for (let i=0; i<=N; i++){
    if(Number(arr[i]) < X){
        answer += Number(arr[i]) + ' ';
    };
};
console.log(answer);