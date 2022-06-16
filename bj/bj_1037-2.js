// const input = require('fs').readFileSync('dev/stdin').toString().split('\n');
let input = [6, `3 4 2 12 6 8`];

const numbers = input[1].split(' ').sort((a,b)=>a-b)
const maxnum = Math.max(...numbers)
const minnum = Math.min(...numbers)
let result = 0

numbers.length>=2 ? result =  maxnum*minnum:result = minnum*minnum
console.log(result)