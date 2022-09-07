// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = [`5`,
`1 1 1 6 0`,
`2 7 8 3 1`,]

let N = parseInt(input[0]);
let arrA = input[1].split(' ').map(n=> parseInt(n));
let arrB = input[2].split(' ').map(n=> parseInt(n));
let sortA = input[1].split(' ').map(n=> parseInt(n)).sort((a,b)=>b-a);
let sortB = input[2].split(' ').map(n=> parseInt(n)).sort((a,b)=>a-b);
// console.log(arrA, arrB, sortA, sortB);

let sum = 0;
for(let i=0; i<N; i++){
  sum += sortA[i]*sortB[i]
}
console.log(sum);