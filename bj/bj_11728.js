// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = [`2 2`,
`3 5`,
`2 9`]
let [N, M] = input[0].split(' ').map(n=>parseInt(n));
let arrA = input[1].split(' ').map(n=>parseInt(n));
let arrB = input[2].split(' ').map(n=>parseInt(n));
let newArr = [...arrA, ...arrB];
newArr.sort((a,b)=>a-b);
console.log(newArr.join(' '))