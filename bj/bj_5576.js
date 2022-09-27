// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(n=>parseInt(n));
let input = [23,
23,
20,
15,
15,
14,
13,
9,
7,
6,
25,
19,
17,
17,
16,
13,
12,
11,
9,
5]
let arrA = input.slice(0, 10).sort((a, b) => b - a);
let arrB = input.slice(10).sort((a,b)=>b-a);
let sumA=sumB=0;
for(let i=0;i<3;i++){
    sumA += arrA[i];
    sumB += arrB[i];
}
console.log(`${sumA} ${sumB}`)