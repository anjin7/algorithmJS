// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [`5 4 4 5`,
`5 4 4 4`,
`5 5 4 4`,
`5 5 5 4`,
`4 4 4 5`]
let arr = [];
for(let i=0; i<input.length; i++){
    let score = input[i].split(' ').map(n=>parseInt(n));
    let sum = score.reduce((acc,current)=>acc+current,0);
    arr.push(sum);
}
let maxSum = Math.max(...arr);
let maxIdx = arr.indexOf(maxSum);
console.log(`${maxIdx+1} ${maxSum}`);