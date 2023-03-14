// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [`Sprout`, 3];
let num = parseInt(input[1]);
let arr = input[0].split('');
console.log(arr[num - 1]);