// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = [4, [1, 100, 100, 100]];
const N = Number(input[0]);
const arr = input[1].split(', ').map(Number);
let sum = 0;

function maxScore(arr){         
    let answer, max=Number.MIN_SAFE_INTEGER;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>max) max=arr[i];
    }
    answer=max;
    return answer;
};
for(let i=0; i<arr.length; i++){
    sum += arr[i];
};

let newScore = sum*100/maxScore(arr);

console.log(newScore/N);