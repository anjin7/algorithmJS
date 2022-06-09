// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const input =['8 16', '32 4', '17 5', '0 0'];

for (let i=0; i < input.length; i++){
    let nums = input[i].split(' ');
    let num1 = Number(nums[0]);
    let num2 = Number(nums[1]);
    
    if(num1===0 && num2===0) break;
    
    if((num2 % num1 === 0) && (num2 / num1 > 0)){
        console.log('factor');
    }else if((num1 % num2 === 0) && (num1 / num2 > 0)){
        console.log('multiple');
    }else{
        console.log('neither');
    }
}