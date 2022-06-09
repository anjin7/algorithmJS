// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let input = [5, ['1 1'], ['2 3'], ['3 4'], ['9 8'], ['5 2']];

for (let i = 1; i <= input[0]; i++) {
    let nums = input[i].split(' ');
    
    let num1 = Number(nums[0]);
    let num2 = Number(nums[1]);
    
    console.log(`Case #${i}: ${num1} + ${num2} = ${num1 + num2}`);
}