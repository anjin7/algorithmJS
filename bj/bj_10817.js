// let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
let input = [20, 30, 10]
let arr = input.map(n => parseInt(n)).sort((a, b) => b - a);
console.log(arr[1])