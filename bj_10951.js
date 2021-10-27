// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input =['1 1', '2 3', '3 4', '9 8', '5 2'];

for(let i=0; i<input.length-1; i++){
    let nums = input[i].split(' ').map(n => Number(n));
    let A = nums[0];
    let B = nums[1];
    
    console.log(A+B);
};