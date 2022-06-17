// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [`3 5`, `1 2 4`, `2 3 4 5 6`];
let [N, M] = input[0].split(' ').map(Number);
let arrA = new Set(input[1].split(' ').map(Number));
let arrB = new Set(input[2].split(' ').map(Number));
let answer = new Set([...arrA, ...arrB]);

arrA.forEach((a) => {
  if(arrB.has(a)){
    answer.delete(a)
  }
})
arrB.forEach((b) => {
  if(arrA.has(b)){
    answer.delete(b)
  }
})
console.log(answer.size)